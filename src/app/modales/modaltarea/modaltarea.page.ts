import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modaltarea',
  templateUrl: './modaltarea.page.html',
  styleUrls: ['./modaltarea.page.scss'],
})
export class ModaltareaPage{
  @Input() tareas: any;
  constructor(private modalController: ModalController) {}

  cerrarModal() {
    this.modalController.dismiss(); // Cierra el modal
  }
}