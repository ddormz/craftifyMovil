import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modalproyectos',
  templateUrl: './modalproyectos.page.html',
  styleUrls: ['./modalproyectos.page.scss'],
})
export class ModalproyectosPage{
  @Input() proyecto: any;
  constructor(private modalController: ModalController) {}

  cerrarModal() {
    this.modalController.dismiss(); // Cierra el modal
  }
}
