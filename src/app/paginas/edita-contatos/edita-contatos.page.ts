import { Component, OnInit } from '@angular/core';

import {NavController} from '@ionic/angular';

import{ContatoService} from '../../servicos/contato.service';


@Component({
  selector: 'app-edita-contatos',
  templateUrl: './edita-contatos.page.html',
  styleUrls: ['./edita-contatos.page.scss'],
})
export class EditaContatosPage implements OnInit {

  nome: string;
  email: string;
  telefone: number;

  constructor(private contato: ContatoService, private nav: NavController ) { }

  ngOnInit() {
  }

  processar(){

    console.log("Estou na função processar")

    let  contato = {};
    
    
    contato ['nome'] = this.nome;
    contato ['email'] = this.email;
    contato ['telefone'] = this.telefone;
  
    console.log (contato);
    this.contato.incluir(contato);
    this.nav.navigateForward("contatos");
  


  }


  }
