// AuthService

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://craftify.ngrok.app';  // Cambia esto con la URL de tu API
  private usuarioLogueado: any;

  constructor(private http: HttpClient) { }

  login(rut: string, password: string): Observable<any> {
    const credentials = { rut, password };

    return this.http.post(`${this.apiUrl}/api/loginapi/`, credentials);
  }

  setUsuarioLogueado(response: any) {
    this.usuarioLogueado = response.user_info;
  }

  getUsuarioLogueado(): any {
    return this.usuarioLogueado;
  }

  getPermissions(): string[] {
    // Asegúrate de que el usuario esté logueado antes de intentar obtener los permisos
    if (this.usuarioLogueado && this.usuarioLogueado.permissions) {
      return this.usuarioLogueado.permissions;
    } else {
      // Si el usuario no está logueado o no tiene permisos definidos, devuelve un arreglo vacío
      return [];
    }
  }
}
