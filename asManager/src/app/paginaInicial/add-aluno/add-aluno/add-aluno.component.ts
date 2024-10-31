import { AlunoService } from './../../../service/alunoService/aluno.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Aluno } from 'src/app/models/Aluno';

@Component({
  selector: 'app-add-aluno',
  templateUrl: './add-aluno.component.html',
  styleUrls: ['./add-aluno.component.scss']
})
export class AddAlunoComponent {
  formGroup: FormGroup;
  aluno: Aluno;

  constructor(AlunoService: AlunoService, private formBuilder: FormBuilder){
    this.aluno = new Aluno();

    this.formGroup = this.formBuilder.group(
      {
        'nome': [this.aluno.nome, Validators.compose([
          Validators.required
        ])],

        'cpf': [this.aluno.cpf, Validators.compose([
          Validators.required
        ])],

        'matricula': [this.aluno.matricula, Validators.compose([
          Validators.required
        ])],

        'email': [this.aluno.email, Validators.compose([
          Validators.required
        ])],
      })
  }

  ngOnInit(){

  }

  salvar(){}
}
