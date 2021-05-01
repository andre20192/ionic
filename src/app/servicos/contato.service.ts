import { Injectable } from '@angular/core';





@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor() { }

  

    incluir(dados) {
      console.log("Metodo incluir contato");
      console.log(dados);
    
    
    
  
  }



}
