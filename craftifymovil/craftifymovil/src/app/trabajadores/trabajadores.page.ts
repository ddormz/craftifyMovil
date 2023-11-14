import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ModalController } from '@ionic/angular';
import { ModaltrabajadoresPage } from '../modales/modaltrabajadores/modaltrabajadores.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trabajadores',
  templateUrl: './trabajadores.page.html',
  styleUrls: ['./trabajadores.page.scss'],
})
export class TrabajadoresPage {
  datosApi: any;

  constructor(private apiService: ApiService, private modalController: ModalController,private router: Router) {
    this.apiService.getDatosDesdeAPITrabajadores().subscribe(
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
      component: ModaltrabajadoresPage,
      componentProps: {
        trabajadores: item
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

