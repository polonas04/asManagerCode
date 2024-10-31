export class Usuario{
  id: number;
  nome: string;
  login: string;
  senha: string;
  email: string;
  tipo: string;

  constructor() {
    this.id = 0;
    this.nome = "";
    this.login = "";
    this.senha = "";
    this.email = "";
    this.tipo = "";
 }
}
