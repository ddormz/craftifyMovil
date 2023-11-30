import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modalproductos',
  templateUrl: './modalproductos.page.html',
  styleUrls: ['./modalproductos.page.scss'],
})
export class ModalproductosPage{
  @Input() productos: any;
  baseURL: string = 'https://craftify.ngrok.app';
  constructor(private modalController: ModalController) {}

  cerrarModal() {
    this.modalController.dismiss(); // Cierra el modal
  }
}
