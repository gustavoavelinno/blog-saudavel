import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ArtigosComponent } from './artigos/artigos.component';
import { ContatoComponent } from './contato/contato.component';
import { ReceitasComponent } from './receitas/receitas.component';
import { ListaComponent } from './lista/lista.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: 'home', component: HomeComponent},
    { path: 'perfil', component: PerfilComponent},
    { path: 'artigos', component: ArtigosComponent},
    { path: 'contato', component: ContatoComponent},
    { path: 'receitas', component: ReceitasComponent},
    { path: 'lista', component: ListaComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }