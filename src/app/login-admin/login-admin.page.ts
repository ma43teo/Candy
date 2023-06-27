import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.page.html',
  styleUrls: ['./login-admin.page.scss'],
})
export class LoginAdminPage {
  email: string = '';
  contrasena: string = '';

  constructor(private router: Router) { }

  irALogin() {
    this.router.navigate(['/login']);
  }

  iniciarSesion() {
    // Verificar las credenciales de administrador
    if (this.email === 'solucionesgap1@gmail.com' && this.contrasena === 'DulceriaEstrella') {
      // redirigir a la página de administrador
      this.router.navigate(['/home-admin']);
    } else {
      console.log('Credenciales inválidas');
    }
  }
}
