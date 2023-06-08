import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'decodificador-view';

  constructor(private router: Router) { }

  decodificarEndereco() {
    this.router.navigate(['/decodifica-endereco']);
  }

  decodificarSenha() {
    this.router.navigate(['/decodifica-senhas']);
  }

  inicio() {
    this.router.navigate(['/dashboard']);
  }
}
