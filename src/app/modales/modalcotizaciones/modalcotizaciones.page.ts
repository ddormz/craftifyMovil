import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-modalcotizaciones',
  templateUrl: './modalcotizaciones.page.html',
  styleUrls: ['./modalcotizaciones.page.scss'],
})
export class ModalcotizacionesPage{
  @Input() cotizaciones: any;
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
  cerrarModal() {
    this.modalController.dismiss(); // Cierra el modal
  }

  descargarPDF(idCotizacion: number) {
    const url = `https://craftify.ngrok.app/api/cotizaciones/pdf/${idCotizacion}/`;

    // Abre el enlace en una nueva ventana o pestaña del navegador
    window.open(url, '_blank');
  }
}



