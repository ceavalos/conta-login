import { Injectable } from '@angular/core';
import { USUARIOS } from '../datos/usuarios';
import { Usuario } from '../modelos/usuario';

@Injectable()
export class LoginService {
  private usuarios: Usuario[];
  private user: Usuario = new Usuario();

  constructor() {
    this.usuarios = USUARIOS;
  }

  async login(usuario: String, Clave: String) {
    for (let i = 0; i < this.usuarios.length; i++) {
      if (
        this.usuarios[i].user === usuario &&
        this.usuarios[i].clave === Clave
      ) {
        this.user = this.usuarios[i];
        break;
      }
    }

    return await this.user;
  }
}
