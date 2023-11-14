import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  
  email: string = ''
  password: string = ''

  constructor(private router: Router) {}

  onLogin() {
    // En un escenario real, aquí verificarías las credenciales con un servicio de autenticación.
    // Por simplicidad, este ejemplo solo redirecciona al usuario a una página "dashboard" si se ingresa cualquier valor en los campos de entrada.
    if (this.email && this.password) {
      // Redirige al usuario a la página de "tabs" después del inicio de sesión.
      this.router.navigate(['/tabs']);
    } else {
      alert('Por favor, ingrese un correo electrónico y una contraseña válidos.');
    }
  }
}