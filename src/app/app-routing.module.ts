import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemViagensComponent } from './listagem-viagens/listagem-viagens.component';
import { NovaViagemComponent } from './nova-viagem/nova-viagem.component';
import { DetalhesViagemComponent } from './detalhes-viagem/detalhes-viagem.component';
import { ExcluirViagemComponent } from './excluir-viagem/excluir-viagem.component';

const routes: Routes =
  [
  {path:"",redirectTo:"/ListagemViagens",pathMatch:"full"},
  {path:"ListagemViagens",component:ListagemViagensComponent},
  {path:"NovaViagem",component:NovaViagemComponent},
  {path:"DetalheViagem",component:DetalhesViagemComponent},
  {path:"ExcluirViagem",component:ExcluirViagemComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
