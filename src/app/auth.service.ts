import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://craftify.ngrok.app';  // Cambia esto con la URL de tu API

  constructor(private http: HttpClient) { }

  login(rut: string, password: string): Observable<any> {
    const credentials = { rut, password };

    return this.http.post(`${this.apiUrl}/api/login/`, credentials);
  }
}
