import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-modaltrabajadores',
  templateUrl: './modaltrabajadores.page.html',
  styleUrls: ['./modaltrabajadores.page.scss'],
  providers: [DatePipe]
})
export class ModaltrabajadoresPage {
  @Input() trabajadores: any;
  constructor(private modalController: ModalController, private datePipe: DatePipe) {}

  cerrarModal() {
    this.modalController.dismiss(); // Cierra el modal
  }
}