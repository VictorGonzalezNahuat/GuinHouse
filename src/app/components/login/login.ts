import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login{
  usr = '';
  pwd = '';
  errorMessage = '';

  private authService = inject(Auth);
  private router = inject(Router);

  onLogin() {
    this.errorMessage = '';

    this.authService.login(this.usr, this.pwd).subscribe({
      next: (res) => {
        console.log('Login exitoso:', res);

        // Verificamos el usuario logueado para confirmar la sesión
        this.authService.getLoggedUser().subscribe(userRes => {
          console.log('Usuario actual en sesión:', userRes);
        });
        this.router.navigate(['/app']);
      },
      error: (err) => {
        console.error('Error al iniciar sesión:', err);
        this.errorMessage = 'Credenciales inválidas o problema de conexión.';
      }
    });
  }
}