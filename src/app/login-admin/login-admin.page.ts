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
      // Credenciales válidas, redirigir a la página de administración
      this.router.navigate(['/productos']);
    } else {
      // Credenciales inválidas, mostrar mensaje de error o hacer alguna otra acción
      console.log('Credenciales inválidas');
    }
  }
}
