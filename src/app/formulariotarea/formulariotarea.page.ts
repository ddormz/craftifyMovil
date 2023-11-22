import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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
    private http: HttpClient  // Inyección de HttpClient
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
        (response) => {
          console.log('Respuesta de la API:', response);
          // Puedes realizar acciones adicionales después de recibir una respuesta exitosa
        },
        (error) => {
          console.error('Error al enviar formulario a la API:', error);
          // Puedes manejar el error de acuerdo a tus necesidades
        }
      );
  }}