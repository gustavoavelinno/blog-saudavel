import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ContatoComponent } from './contato/contato.component';
import { ArtigosComponent } from './artigos/artigos.component';
import { ReceitasComponent } from './receitas/receitas.component';
import { ListaComponent } from './lista/lista.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginComponent,CadastroComponent,HomeComponent,PerfilComponent,ContatoComponent,ArtigosComponent,ReceitasComponent,ListaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css' 
})
export class AppComponent {
  title = 'blog';
}