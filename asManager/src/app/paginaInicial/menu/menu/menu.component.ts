import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  public appPages = [
    { title: 'Manter Aluno', url: '/manter-aluno', color: "dark" },
    { title: 'Manter Professor', url: '/manter-professor', color: "dark" },
    { title: 'Manter Usuário', url: '/manter-usuario', color: "dark" },
  ];

  constructor(){

  }
}
