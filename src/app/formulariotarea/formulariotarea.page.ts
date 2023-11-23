import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-formulariotarea',
  templateUrl: './formulariotarea.page.html',
  styleUrls: ['./formulariotarea.page.scss'],
})
export class FormulariotareaPage implements OnInit {
  tareaForm: FormGroup;
  tareaSeleccionada: any;
  equipo: any;
  fecha_a: any;
  fecha_t: any;
  fecha_hoy: any;
  tiempo_restante: any;
  status: any;
  proyecto: any;
  datosApi: any;
  id_tarea: any;
  diasRestantes: any;
  // Inyecta el servicio HttpClient en el constructor
  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private toastController: ToastController // Inyección de HttpClient
  ) {
    this.tareaForm = this.formBuilder.group({
      tarea: ['', Validators.required],
      comentario: ['', Validators.required],
      fecha: [''],
      imagen: [null, Validators.required]
    });

    
  }

  ngOnInit() {
    // Recibe la información de la tarea seleccionada desde los parámetros de la ruta
    this.route.queryParams.subscribe((params) => {
      this.tareaSeleccionada = params['tareaSeleccionada'];
      this.id_tarea = params['id'];
      this.equipo = params['equipo'];
      this.proyecto = params['proyecto'];
      this.fecha_a = new Date(params['fecha_asignacion']); // Asegurarse de que la fecha sea de tipo Date
      this.fecha_t = new Date(params['fecha_fin']); 
      this.status = params['status'];
      this.fecha_hoy = new Date();
      this.tiempo_restante = this.fecha_t.getTime() - this.fecha_hoy.getTime();
      const milisegundosEnUnDia = 24 * 60 * 60 * 1000;

      // Calcular la diferencia en días y redondear al entero más cercano
      const diasRestantes = Math.round(this.tiempo_restante / milisegundosEnUnDia);
     
      this.diasRestantes = diasRestantes;


      

      
      
  

      console.log(this.equipo, this.proyecto, this.fecha_a, this.fecha_t, this.status, this.tiempo_restante);

      // Si hay datos disponibles, carga la lista de tareas
      if (this.tareaSeleccionada) {
        this.apiService.getDatosTareas().subscribe(
          (data) => {
            console.log('Datos recibidos de la API:', data);
          },
          (error) => {
            console.error('Error al obtener datos de la API:', error);
          }
        );
      }
    });
  }


  onFileChange(event: any) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      // Puedes hacer lo que necesites con el archivo aquí, como cargarlo a un servicio o mostrar una vista previa
      this.tareaForm.patchValue({
        imagen: file,
      });
    }
  }

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000, // Duración en milisegundos
      position: 'bottom' // Posición en la pantalla
    });
    toast.present();
  }
  
  submitForm() {
    // Establecer la fecha actual
    const fechaActual = new Date();
    this.tareaForm.patchValue({
      fecha: fechaActual.toISOString(),
    });
  
    // Crear un objeto FormData para manejar la carga de archivos
    const formData = new FormData();

    // Obtener id_tarea de los parámetros de la ruta
    const tareaIdFromParams = this.id_tarea;

    // Añadir id_tarea al FormData
    if (tareaIdFromParams || tareaIdFromParams === 0) {
      formData.append('tarea', tareaIdFromParams);
    }
  
    const comentarioControl = this.tareaForm.get('comentario');
    if (comentarioControl && comentarioControl.value) {
      formData.append('comentario', comentarioControl.value);
    }
  
    const fechaControl = this.tareaForm.get('fecha');
    if (fechaControl && fechaControl.value) {
      formData.append('fecha', fechaControl.value);
    }
  
    const imagenControl = this.tareaForm.get('imagen');
    if (imagenControl && imagenControl.value instanceof File) {
      formData.append('imagen', imagenControl.value);
    }
    console.log('Formulario enviado:', this.tareaForm.value);
    
    // Enviar la solicitud POST a la API
    this.http.post('https://craftify.ngrok.app/api/apiagregaravances/', formData)
    .subscribe(
      async (response: any) => {
        console.log('Respuesta de la API:', response);
        if (response.fecha) {
          console.log('Fecha de la respuesta:', response.fecha);
          await this.showToast('Subido correctamente');
          this.router.navigate(['/tabs/avances']);
        } else {
          console.error('Error al enviar formulario a la API:', response);
          await this.showToast('Error en la solicitud');
        }
      },
      async (error) => {
        console.error('Error al enviar formulario a la API:', error);
        // Mostrar un toast con el mensaje de error
        await this.showToast('Error en la solicitud, verifica que todos los campos esten rellenos' );
      }
    );

  // ...
    }
  }