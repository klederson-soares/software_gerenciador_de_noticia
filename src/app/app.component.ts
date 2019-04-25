import { Component } from '@angular/core';
import { NoticiasService } from './noticias.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gerenciador de Noticias';
  tela = 'inicio';

  constructor(private service: NoticiasService){}
  
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
}
