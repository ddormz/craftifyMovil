import { Component} from '@angular/core';
import { ApiService } from '../api.service';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ModalcotizacionesPage } from '../modales/modalcotizaciones/modalcotizaciones.page';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cotizaciones',
  templateUrl: './cotizaciones.page.html',
  styleUrls: ['./cotizaciones.page.scss'],
})
export class CotizacionesPage {

  datosApi: any;

  constructor(private apiService: ApiService, private modalController: ModalController, private router: Router, private httpClient: HttpClient) {
    this.apiService.getDatosCotizaciones().subscribe(
      (data) => {
        console.log('Datos recibidos de la API:', data);
        this.datosApi = data;
      },
      (error) => {
        console.error('Error al obtener datos de la API:', error);
      }
    );
  }

  async abrirModal(item: any) {
    const modal = await this.modalController.create({
      component: ModalcotizacionesPage,
      componentProps: {
        cotizaciones: item
      }
    });

    return await modal.present();
  }

  
  cerrarModal() {
    this.modalController.dismiss(); // Cierra el modal
  }

  // Función para ir a la página de perfil
  irAPerfil() {
    // Puedes navegar a la página de perfil usando el enrutador
    this.router.navigate(['/perfil']);
  }

  // Función para cerrar sesión
  cerrarSesion() {
    // Puedes implementar aquí la lógica para cerrar sesión, por ejemplo, limpiar el token de autenticación, etc.
    // Luego, redirige a la página de inicio de sesión o a la página principal
    this.router.navigate(['/login']);
  }
}
