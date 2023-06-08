import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { DecodificaEnderecoComponent } from './view/decodifica-endereco/decodifica-endereco.component';
import { DecodificaSenhasComponent } from './view/decodifica-senhas/decodifica-senhas.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'decodifica-endereco', component: DecodificaEnderecoComponent },
  { path: 'decodifica-senhas', component: DecodificaSenhasComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
