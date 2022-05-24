import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../modelos/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  usuario: Usuario = new Usuario();
  clave: String = '';

  ngOnInit(): void {}

  login() {
    console.log('usuario= ' + this.usuario.user + ' clave= ' + this.clave);
  }
}
