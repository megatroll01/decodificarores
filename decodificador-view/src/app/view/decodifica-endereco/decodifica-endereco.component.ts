import { Component } from '@angular/core';
import { DecodificadorService } from '../../service/decodificador.service';

@Component({
  selector: 'app-decodifica-endereco',
  templateUrl: './decodifica-endereco.component.html',
  styleUrls: ['./decodifica-endereco.component.css']
})
export class DecodificaEnderecoComponent {
  numero: number | null = null;
  resultado: any = null;
  listaNumeros: number[] = [];
  semNumero = false

  constructor(private decodificadorService: DecodificadorService) { }

  adicionarNumero() {
    if (this.numero !== null) {
      this.semNumero = false;
      this.listaNumeros.push(this.numero);
    }
    this.numero = null;
  }
  removerNumero(numero: number) {
    const index = this.listaNumeros.indexOf(numero);
    if (index !== -1) {
      this.listaNumeros.splice(index, 1);
    }
  }

  confirmar() {
    const dados = {
      numeros: this.listaNumeros
    };
    if(this.listaNumeros.length > 0){
      this.semNumero = false;
      this.decodificadorService.carregarComandos(dados)
      .subscribe(response => {
       this.resultado = response;
      });
    }else{
      this.resultado = null;
      this.semNumero = true;
    }
    
  }
}
