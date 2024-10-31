import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PaginaInicialComponent } from './paginaInicial/pagina-inicial/pagina-inicial.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './paginaInicial/menu/menu/menu.component';
import { ManterProfessorComponent } from './paginaInicial/manter-professor/manter-professor.component';
import { AddProfessorComponent } from './paginaInicial/add-professor/add-professor/add-professor.component';
import { AddAlunoComponent } from './paginaInicial/add-aluno/add-aluno/add-aluno.component';
import { AddUsuarioComponent } from './paginaInicial/add-usuario/add-usuario/add-usuario.component';
import { ManterUsuarioComponent } from './paginaInicial/manter-usuario/manter-usuario/manter-usuario.component';
import { ManterAlunoComponent } from './paginaInicial/manter-aluno/manter-aluno/manter-aluno.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    PaginaInicialComponent,
    MenuComponent,
    ManterProfessorComponent,
    AddProfessorComponent,
    AddAlunoComponent,
    AddUsuarioComponent,
    ManterUsuarioComponent,
    ManterAlunoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
