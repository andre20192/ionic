import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';




@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor(private firestore: AngularFirestore) { }

  

    incluir(dados) {
      console.log("Metodo incluir contato");
      console.log(dados);
      return this.firestore.collection('contatos').add(dados);
    
    
    
  
  }
  listar() {

    return this.firestore.collection('contatos').snapshotChanges();
    

  }


}
