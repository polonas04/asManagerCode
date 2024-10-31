import { Component, OnInit } from '@angular/core';
import { Aluno } from 'src/app/models/Aluno';

@Component({
  selector: 'app-manter-aluno',
  templateUrl: './manter-aluno.component.html',
  styleUrls: ['./manter-aluno.component.scss']
})
export class ManterAlunoComponent implements OnInit{
  alunos: Aluno[];

  constructor(){
    this.alunos = [];
  }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    //this.alunos = <Professor[]>this.professorService.listar();
  }

  excluir(aluno: Aluno){
    console.log("Professor Excluido")
  }
}
