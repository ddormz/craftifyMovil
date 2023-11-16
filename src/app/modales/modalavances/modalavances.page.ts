import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modalavances',
  templateUrl: './modalavances.page.html',
  styleUrls: ['./modalavances.page.scss'],
})
export class ModalavancesPage{
  @Input() avances: any;
  baseURL: string = 'http://127.0.0.1:8000';
  constructor(private modalController: ModalController) {}

  cerrarModal() {
    this.modalController.dismiss(); // Cierra el modal
  }
}