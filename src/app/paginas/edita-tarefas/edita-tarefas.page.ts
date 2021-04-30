import { Component, OnInit } from '@angular/core';

import{ NavController } from '@ionic/angular';

import  { TarefaService } from '../../servicos/tarefa.service';

@Component({
  selector: 'app-edita-tarefas',
  templateUrl: './edita-tarefas.page.html',
  styleUrls: ['./edita-tarefas.page.scss'],
})
export class EditaTarefasPage implements OnInit {

  nome: string;
  descricao: string;


  constructor(private servico: TarefaService, private nav: NavController) { }

  ngOnInit() {
  }


processar(){

  console.log("Estou na função processar")
  let  tarefa ={};
  
  
  tarefa ['nome'] = this.nome;
  tarefa ['descricao'] = this.descricao;

  console.log (tarefa);
  this.servico.incluir(tarefa);
  this.nav.navigateForward("tarefas");


}

}
