import { Usuario } from 'src/app/models/Usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  httpHeaders = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }

  url: string = 'https://api-atividade04.odiloncorrea.com/acao';

  constructor(private httpClient: HttpClient) { }

  salvar(usuario: Usuario) {
    let usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');

    if ((usuario.id === 0) && (this.verificarUsuario(usuario))) {
      usuario.id = (new Date().getTime() / 1000) * Math.random();
      usuarios.push(usuario);
    } else {
      if(this.verificarUsuario(usuario)){
        let posicao = usuarios.findIndex((elemento: Usuario) => elemento.id === usuario.id);
        usuarios[posicao] = usuario;
      }
    }

    localStorage.setItem('usuarios', JSON.stringify(usuarios));
  }

  listar() {
    let usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    return usuarios;
  }

  buscarPorId(id: number) {
    let usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    let usuario = new Usuario();
    usuario = usuarios.find((elemento: Usuario) => elemento.id === id);
    return usuario;
  }

  verificarUsuario(usuario: Usuario) {
    let usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    let verificar = true;
    for (let i = 0; i < usuarios.length; i++) {
      if ((usuarios[i].login === usuario.login) && (usuarios[i].id != usuario.id)) {
        verificar = false;
      }
    }
    return verificar;
  }

  excluir(id: number) {
    let usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    usuarios = usuarios.filter((elemento: Usuario) => elemento.id !== id);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
  }

}
