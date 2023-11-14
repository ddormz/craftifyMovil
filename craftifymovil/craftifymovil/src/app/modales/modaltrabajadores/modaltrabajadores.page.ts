import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modaltrabajadores',
  templateUrl: './modaltrabajadores.page.html',
  styleUrls: ['./modaltrabajadores.page.scss'],
})
export class ModaltrabajadoresPage {
  @Input() trabajadores: any;
  constructor(private modalController: ModalController) {}

  cerrarModal() {
    this.modalController.dismiss(); // Cierra el modal
  }
}