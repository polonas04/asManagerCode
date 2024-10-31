import { UsuarioService } from './../../../service/serviceUsuario/usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.scss'],
})
export class AddUsuarioComponent implements OnInit {
  formGroup: FormGroup;
  usuario: Usuario;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private usuarioService: UsuarioService,
    private activatedRoute: ActivatedRoute
  ) {
    this.usuario = new Usuario();

    this.formGroup = this.formBuilder.group({
      nome: [this.usuario.nome, Validators.compose([Validators.required])],

      login: [this.usuario.login, Validators.compose([Validators.required])],

      senha: [this.usuario.senha, Validators.compose([Validators.required])],

      email: [this.usuario.email, Validators.compose([Validators.required])],

      tipo: [this.usuario.tipo, Validators.compose([Validators.required])],
    });
  }

  async ngOnInit(): Promise<void> {
    const id = parseFloat(this.activatedRoute.snapshot.params['id']);

    if (!isNaN(id)) {
      this.usuario = await this.usuarioService.buscarPorId(id);

      this.formGroup.get('nome')?.setValue(this.usuario.nome);
      this.formGroup.get('login')?.setValue(String(this.usuario.login));
      this.formGroup.get('senha')?.setValue(this.usuario.senha);
      this.formGroup.get('email')?.setValue(this.usuario.email);
      this.formGroup.get('tipo')?.setValue(String(this.usuario.tipo));
    }
  }


  salvar() {
    // Verifica se o formulário é válido
    if ((this.formGroup.valid)) {
      // Aqui você pode implementar a lógica de login (ex. chamar um serviço de autenticação)
      this.usuario.nome = this.formGroup.value.nome;
      this.usuario.login = this.formGroup.value.login;
      this.usuario.senha = this.formGroup.value.senha;
      this.usuario.email = this.formGroup.value.email;
      this.usuario.tipo = this.formGroup.value.tipo;

        this.usuarioService.salvar(this.usuario);

        console.log("Salvo c sucesso");
        this.router.navigate(['/manter-usuario'])
      }

      // Se a autenticação for bem-sucedida, redirecione para outra página
      this.router.navigate(['/menu']); // Troque '/pagina-destino' pela rota desejada
    }
  }

