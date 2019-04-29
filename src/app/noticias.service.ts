import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  autores = ['Maria','João', 'Ana', 'Hokage'];
  noticias=[];
  noticia = {};
  constructor() {}
  
  submit(autor, noticia, publicar){
    let n = {
      'id': Math.random(),
      'autor': autor,
      'noticia': noticia,
      'publicar': publicar,
      'views': 0
    }
    this.noticias.push(n)
    console.log(n)
  }
  listaDeNoticias(){
    return this.noticias
  }

  listaautores(){
    return this.autores
  }
  publicar(valor){
    for (let noticia of this.noticias){
      if (noticia.id === valor.id){
        valor.publicar = true
      }
    }
  }
  ver(valor){
    for (let noticia of this.noticias){
      if (noticia.id === valor.id){
        valor.views++
        this.noticia = {
          'autor': valor.autor,
          'noticia': valor.noticia
        }
      }
    }
  }

  quantidadeDeNoticiasPorAutor() {
    let estatisticas = [];
    let estatisticasIdx = {};
    for (const autor of this.autores) {
      estatisticasIdx[autor] = estatisticas.length;
      estatisticas.push({ autor: autor, valor: 0 });
    }
    for (const noticia of this.noticias) {
      if (noticia.publicar === true) {
        estatisticas[estatisticasIdx[noticia.autor]].valor++;
      }
    }
    return estatisticas;
  }

  autorQueMaisPublicou(){
    let nome = '';
    let qt = 0;
    for (let aux of this.quantidadeDeNoticiasPorAutor()){
     if (aux.valor>=qt){
       nome = aux.autor
       qt = aux.valor
     }
    }
    return nome
  }
  rankingDeNoticias(){
    return this.noticias.sort(function(a, b){return b.views-a.views})
  }

}
