import { UsuarioService } from 'src/app/service/serviceUsuario/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';

@Component({
  selector: 'app-manter-usuario',
  templateUrl: './manter-usuario.component.html',
  styleUrls: ['./manter-usuario.component.scss']
})
export class ManterUsuarioComponent implements OnInit{
  usuarios: Usuario[];

  constructor(private usuarioService: UsuarioService){
    this.usuarios = [];
  }

  ngOnInit() {
    this.usuarios = <Usuario[]>this.usuarioService.listar();
  }

  excluir(usuario: Usuario){
    this.usuarioService.excluir(usuario.id);
  }
}
