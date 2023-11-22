// perfil.page.ts
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  usuario: any;
  permisosUsuario: string[] = [];

  constructor(private authService: AuthService) { }

  ngOnInit() {
    const usuarioGuardado = localStorage.getItem('usuarioLogueado');
    this.usuario = usuarioGuardado ? JSON.parse(usuarioGuardado) : null;
    console.log(this.usuario);

  }
}