import { Component } from '@angular/core';
import { NoticiasService } from './noticias.service';
import { ActivationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gerenciador de Noticias';
  tela = 'inicio';
  autor = '';
  publicar = false;
  noticia = '';
  noticia_visualizada = null;

  constructor(private service: NoticiasService){}
  salvar(){
    this.service.submit(this.autor, this.noticia, this.publicar);
    this.tela = 'publicar';
    this.autor = '';
    this.noticia = '';
  }
  limpar(){
    this.autor = '';
    this.noticia = '';
  }
  telaInicio(){
    this.tela = 'inicio'
  }

  telaCadastro(){
    this.tela = 'cadastro'
  }

  telaPublicar(){
    this.tela = 'publicar'
  }

  telaEstatistica(){
    this.tela = 'estatistica'
  }
  
  publica(valor){
    this.service.publica(valor)
  }

  ver(valor){
    this.service.ver(valor);
    this.noticia_visualizada = valor;
    this.tela = 'ver';
  }
}
