// perfil.page.ts
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  providers: [DatePipe]
})
export class PerfilPage implements OnInit {
  usuario: any;
  permisosUsuario: string[] = [];

  constructor(private authService: AuthService, private datePipe: DatePipe, private router: Router) { }

  ngOnInit() {
    const usuarioGuardado = localStorage.getItem('usuarioLogueado');
    this.usuario = usuarioGuardado ? JSON.parse(usuarioGuardado) : null;
    console.log(this.usuario);

  }

  volverAtras() {
    this.router.navigate(['/tabs']);
  }
}