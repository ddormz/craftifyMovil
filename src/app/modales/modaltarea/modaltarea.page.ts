import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-modaltarea',
  templateUrl: './modaltarea.page.html',
  styleUrls: ['./modaltarea.page.scss'],
})
export class ModaltareaPage {
  @Input() tareas: any;
  @Output() subirTarea = new EventEmitter<any>();

  constructor(private modalController: ModalController, private navCtrl: NavController) {}

  cerrarModal() {
    this.modalController.dismiss();
  }

  subir() {
    // Emitir la tarea seleccionada
    this.subirTarea.emit(this.tareas.tarea);

    // Cierra el modal
    this.modalController.dismiss();

    // Redirige directamente a la página de formulario
    this.navCtrl.navigateForward(['/formulariotarea'], { queryParams: {
       tareaSeleccionada: '*' + this.tareas.tarea_id  + ' - ' + this.tareas.tarea, id: this.tareas.tarea_id, equipo: this.tareas.equipo_id_equipo,
        proyecto: this.tareas.proyecto, fecha_asignacion: this.tareas.fecha_asignacion, 
        fecha_fin: this.tareas.fecha_termino, status: this.tareas.status_tarea } });
    console.log('Tarea seleccionada:', this.tareas.tarea_id);
  }
}
