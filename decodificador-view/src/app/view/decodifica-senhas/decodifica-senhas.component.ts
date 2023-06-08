import { Component } from '@angular/core';
import { DecodificadorService } from '../../service/decodificador.service';

@Component({
  selector: 'app-decodifica-senhas',
  templateUrl: './decodifica-senhas.component.html',
  styleUrls: ['./decodifica-senhas.component.css']
})
export class DecodificaSenhasComponent {
  numeroSenhasPossiveis: number | null = null;
  tentativaSenha: string = '';
  resultadoVerificacao: string | null = null;

  constructor(private decodificadorService: DecodificadorService) { }

  ngOnInit() {
    this.obterNumeroSenhasPossiveis();
  }

  obterNumeroSenhasPossiveis() {
    this.decodificadorService.obterNumeroSenhasPossiveis()
      .subscribe(response => {
        this.numeroSenhasPossiveis = response.quantidadeSenhas;
      });
  }

  verificarSenha() {
    if (parseInt(this.tentativaSenha) >= 184759 && parseInt(this.tentativaSenha) <= 856920) {
      this.decodificadorService.verificarSenha(this.tentativaSenha)
      .subscribe(response => {
        this.resultadoVerificacao = response.isValid ? 'Senha válida!' : 'Senha inválida!';
      });
    } else {
      this.resultadoVerificacao = 'Senha inválida';
    }
    
  }
}
