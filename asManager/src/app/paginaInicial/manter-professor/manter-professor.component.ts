import { Component, OnInit } from '@angular/core';
import { Professor } from 'src/app/models/Professor';

@Component({
  selector: 'app-manter-professor',
  templateUrl: './manter-professor.component.html',
  styleUrls: ['./manter-professor.component.scss']
})
export class ManterProfessorComponent implements OnInit{
  professores: Professor[];

  constructor(){
    this.professores = [];
  }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    //this.professores = <Professor[]>this.professorService.listar();
  }

  excluir(prof: Professor){
    console.log("Professor Excluido")
  }
}
