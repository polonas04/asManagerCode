import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicialComponent } from './paginaInicial/pagina-inicial/pagina-inicial.component';
import { MenuComponent } from './paginaInicial/menu/menu/menu.component';
import { ManterProfessorComponent } from './paginaInicial/manter-professor/manter-professor.component';
import { AddProfessorComponent } from './paginaInicial/add-professor/add-professor/add-professor.component';
import { AddAlunoComponent } from './paginaInicial/add-aluno/add-aluno/add-aluno.component';
import { AddUsuarioComponent } from './paginaInicial/add-usuario/add-usuario/add-usuario.component';
import { ManterUsuarioComponent } from './paginaInicial/manter-usuario/manter-usuario/manter-usuario.component';
import { ManterAlunoComponent } from './paginaInicial/manter-aluno/manter-aluno/manter-aluno.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'asManager',
    pathMatch: 'full'
  },
  {
    path: 'asManager',
    component: PaginaInicialComponent,
  },
  {
    path: 'menu',
    component: MenuComponent,
  },
  {
    path: 'menu/:id',
    component: MenuComponent,
  },
  {
    path: 'manter-professor',
    component: ManterProfessorComponent,
  },
  {
    path: 'add-professor',
    component: AddProfessorComponent,
  },
  {
    path: 'manter-aluno',
    component: ManterAlunoComponent,
  },
  {
    path: 'add-aluno',
    component: AddAlunoComponent,
  },
  {
    path: 'manter-usuario',
    component: ManterUsuarioComponent,
  },
  {
    path: 'manter-usuario/:id',
    component: ManterUsuarioComponent,
  },
  {
    path: 'add-usuario',
    component: AddUsuarioComponent,
  },
  {
    path: 'add-usuario/:id',
    component: AddUsuarioComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
