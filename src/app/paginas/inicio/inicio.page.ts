import { Component, OnInit } from '@angular/core';
import{NavController} from '@ionic/angular';
import{AutenticacaoService} from '../../servicos/autenticacao.service';
import{ AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private nav: NavController, private servico: AutenticacaoService,private auth: AngularFireAuth) { }

  ngOnInit() {
  }
  sair(){
  

    this.servico.sair().then(res =>{
      this.nav.navigateForward('home');
    }, err => { 

      console.log(err);

    });


  }






}
