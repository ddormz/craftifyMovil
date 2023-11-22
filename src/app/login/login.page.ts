import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  rut: string = '';
  password: string = '';
  showPassword: boolean = false;

  constructor(private authService: AuthService, private router: Router, private alertController: AlertController) { }

  onLogin(): void {
    this.authService.login(this.rut, this.password).subscribe(
      (response: any) => {
        this.authService.setUsuarioLogueado(response);
        localStorage.setItem('usuarioLogueado', JSON.stringify(response));
        this.router.navigate(['/tabs']);
        console.log(response);
      },
      error => {
        console.error(error);
        // Maneja el error de inicio de sesión
  
        // Muestra un mensaje de alerta al usuario
        this.presentAlert('Credenciales Inválidas', 'Por favor, verifica tu RUT y Contraseña.');
      });
  }

  async presentAlert(header: string, message: string): Promise<void> {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}