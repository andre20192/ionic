import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edita-contatos',
  templateUrl: './edita-contatos.page.html',
  styleUrls: ['./edita-contatos.page.scss'],
})
export class EditaContatosPage implements OnInit {

  nome: string;
  email: string;
  telefone: number;

  constructor() { }

  ngOnInit() {
  }

}
