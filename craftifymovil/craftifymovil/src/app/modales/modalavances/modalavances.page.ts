import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modalavances',
  templateUrl: './modalavances.page.html',
  styleUrls: ['./modalavances.page.scss'],
})
export class ModalavancesPage{
  @Input() avances: any;
  constructor(private modalController: ModalController) {}

  cerrarModal() {
    this.modalController.dismiss(); // Cierra el modal
  }
}