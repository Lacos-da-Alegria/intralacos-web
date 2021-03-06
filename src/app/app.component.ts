import { Router } from '@angular/router';
import { UsuarioService } from './services/usuario-service/usuario-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(
    private usuarioServico: UsuarioService,
    private router: Router
  ) {
      if (!this.usuarioServico.getUsuarioLogadoAtual()) {
        this.router.navigate(['/autenticacao/']);
      }
  }
}
