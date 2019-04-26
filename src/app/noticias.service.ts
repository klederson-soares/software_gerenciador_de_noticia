import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  autores = ['Maria','João', 'Ana', 'hokage'];
  noticias=[];
  constructor() {}
  
  submit(autor, noticia, publicar){
    let n = {
      'id': Math.random(),
      'autor': autor,
      'noticia': noticia,
      'publicar': publicar,
      'views': 0
    }
    console.log(n)
  }

  listaautores(){
    return this.autores
  }
}
