import { Injectable } from '@angular/core';
import { USUARIOS } from '../datos/USUARIOS';
import { Usuario } from '../modelos/usuario';

@Injectable()
export class LoginService {
  
  private usuarios: Usuario[];
  
  constructor() { this.usuarios = USUARIOS};

 Async login( usuario: String, Clave: String  ){
  let index = -1;
  for (let i = 0; i < this.usuarios.length; i++) {
    if (this.usuarios[i].id === id) {
      index = i;
      break;
    }
  }

  return index;
 };

}
