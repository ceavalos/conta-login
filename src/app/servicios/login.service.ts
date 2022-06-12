import { Injectable } from '@angular/core';
import { USUARIOS } from '../datos/usuarios';
import { Usuario } from '../modelos/usuario';
import { Observable, of } from 'rxjs';

@Injectable()
export class LoginService {
  private usuarios: Usuario[];
  private user: Usuario = new Usuario();

  constructor() {
    this.usuarios = USUARIOS;
  }

  login(usuario: String, Clave: String): Observable<Usuario> {
    for (let i = 0; i < this.usuarios.length; i++) {
      if (
        this.usuarios[i].user === usuario &&
        this.usuarios[i].clave === Clave
      ) {
        this.user = this.usuarios[i];
        //this.user.token = jwt.sign(usuario, 'clave');
        //localStorage.setItem('currentUser', JSON.stringify(this.user));
        break;
      }
    }

    return of(this.user);
  }
}
