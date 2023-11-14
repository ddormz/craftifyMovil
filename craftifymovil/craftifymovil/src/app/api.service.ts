import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getDatosDesdeAPIProyectos() {
    const url = 'http://127.0.0.1:8000/api/apiproyectos/'; // Reemplaza con la URL de tu API
    return this.http.get(url);
  }
  getDatosDesdeAPITrabajadores() {
    const url1 = 'http://127.0.0.1:8000/api/apitrabajadores/'; // Reemplaza con la URL de tu API
    return this.http.get(url1);
  }
  getDatosDesdeAPIAvances() {
    const url1 = '  http://127.0.0.1:8000/api/apiveravances/'; // Reemplaza con la URL de tu API
    return this.http.get(url1);
  }
  getDatosDesdeAPIProductos() {
    const url1 = '  http://127.0.0.1:8000/api/apiproductos/'; // Reemplaza con la URL de tu API
    return this.http.get(url1);
  }

}
