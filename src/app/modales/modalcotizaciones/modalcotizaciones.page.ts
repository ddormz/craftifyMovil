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
    this.httpClient.get(`https://craftify.ngrok.app/api/cotizaciones/pdf/${idCotizacion}/`, {
      responseType: 'arraybuffer',
    })
      .subscribe(
        (data: ArrayBuffer) => {
          this.descargarArchivo(data);
        },
        (error) => {
          console.error('Error al descargar el PDF', error);
        }
      );
  }

  private descargarArchivo(data: ArrayBuffer) {
    // Aquí puedes implementar la lógica para descargar el archivo, por ejemplo,
    // creando un Blob y generando una URL para descargarlo.
    const blob = new Blob([data], { type: 'application/pdf' });
    const url = window.URL.createObjectURL(blob);

    // Crea un enlace para descargar el archivo y haz clic en él
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Cotizacion' + this.cotizaciones.nombre_cliente + this.cotizaciones.apellido_cliente + this.cotizaciones.nombre_cotizacion + this.cotizaciones.fecha_cotizacion+ '.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }

}

