import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DecodificadorService {
  private backendUrl = 'http://localhost:3000'; 

  constructor(private http: HttpClient) { }

  carregarComandos(dados: any) {
    return this.http.post<number>(this.backendUrl+"/commandos", dados);
  }

  obterNumeroSenhasPossiveis(): Observable<any> {
    return this.http.get<any>(this.backendUrl+"/quantidade-senhas");
  }

  verificarSenha(senha: string): Observable<any> {
    return this.http.get<any>(this.backendUrl+"/verificar-senha/"+ senha );
  }
}
