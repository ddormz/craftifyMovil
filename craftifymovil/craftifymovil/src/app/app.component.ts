import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
}

export class MiComponente {
  constructor(private apiService: ApiService) {}

  obtenerDatos() {
    this.apiService.getDatosDesdeAPIProyectos().subscribe((data) => {
      console.log('Datos recibidos:', data);
      // Procesa los datos recibidos de la API
    });
  }
}