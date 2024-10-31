import { Router } from '@angular/router';
import { Usuario } from './../../models/Usuario';
import { UsuarioService } from './../../service/serviceUsuario/usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.scss']
})
export class PaginaInicialComponent implements OnInit{
  formGroup: FormGroup;
  usuario: Usuario;

  constructor(usuarioService: UsuarioService, private formBuilder: FormBuilder, private router: Router){
    this.usuario = new Usuario();

    this.formGroup = this.formBuilder.group(
      {
        'login': [this.usuario.login, Validators.compose([
          Validators.required
        ])],

        'senha': [this.usuario.senha, Validators.compose([
          Validators.required
        ])]
      }
    )
  }

  ngOnInit(){
  }

  onSubmit(){
    // Verifica se o formulário é válido
    if (this.formGroup.valid) {
      // Aqui você pode implementar a lógica de login (ex. chamar um serviço de autenticação)

      // Se a autenticação for bem-sucedida, redirecione para outra página
      this.router.navigate(['/menu']);  // Troque '/pagina-destino' pela rota desejada
    }

  }

}
