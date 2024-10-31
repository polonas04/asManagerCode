import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/service/serviceUsuario/usuario.service';
import { Usuario } from 'src/app/models/Usuario';
import { Professor } from 'src/app/models/Professor';

@Component({
  selector: 'app-add-professor',
  templateUrl: './add-professor.component.html',
  styleUrls: ['./add-professor.component.scss']
})
export class AddProfessorComponent implements OnInit{
  formGroup: FormGroup;
  professor: Professor;

  constructor(UsuarioService: UsuarioService, private formBuilder: FormBuilder){
    this.professor = new Professor();

    this.formGroup = this.formBuilder.group(
      {
        'nome': [this.professor.nome, Validators.compose([
          Validators.required
        ])],

        'cpf': [this.professor.cpf, Validators.compose([
          Validators.required
        ])],

        'email': [this.professor.email, Validators.compose([
          Validators.required
        ])],
      })
  }

  ngOnInit() {
  }

  salvar(){}
}
