import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'https://craftify.ngrok.app'; // Coloca la URL de tu API aquÃ­

  constructor(private http: HttpClient) {}

  private getUrl(endpoint: string): string {
    return `${this.baseUrl}/api/${endpoint}/`;
  }

  getDatosDesdeAPIProyectos() {
    const url = this.getUrl('apiproyectos');
    return this.http.get(url);
  }

  getDatosDesdeAPITrabajadores() {
    const url = this.getUrl('apitrabajadores');
    return this.http.get(url);
  }

  getDatosDesdeAPIAvances() {
    const url = this.getUrl('apiveravances');
    return this.http.get(url);
  }

  getDatosDesdeAPIProductos() {
    const url = this.getUrl('apiproductos');
    return this.http.get(url);
  }

  getDatosCotizaciones() {
    const url = this.getUrl('apicotizaciones');
    return this.http.get(url);
  }
  getDatosTareas() {
    const url = this.getUrl('apitareas');
    return this.http.get(url);
  }
}