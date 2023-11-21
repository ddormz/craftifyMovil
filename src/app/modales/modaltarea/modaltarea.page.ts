import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modaltarea',
  templateUrl: './modaltarea.page.html',
  styleUrls: ['./modaltarea.page.scss'],
})
export class ModaltareaPage{
  @Input() tareas: any;
  constructor(private modalController: ModalController, private navCtrl: NavController, private router: Router) {}

  cerrarModal() {
    this.modalController.dismiss(); // Cierra el modal
  }
  
  async cerrarModalYRedirigir() {
    // Cierra el modal
    await this.modalController.dismiss();
  
    // Redirige a la página deseada
    this.router.navigate(['/formulariotarea']);
  }
}