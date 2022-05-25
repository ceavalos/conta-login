import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../modelos/usuario';
import { LoginService } from '../../servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario: Usuario = new Usuario();
  clave: String = '';
  user: Usuario;

  constructor(private _loginService: LoginService) {}

  ngOnInit(): void {}

  login() {
    console.log('usuario= ' + this.usuario.user + ' clave= ' + this.clave);
    _loginService
      .login(this.usuario.user, this.clave)
      .then((data) => (this.user = data));

    //this._empresaService.getAll().then((data) => (this.empresas = data));
    console.log(' user= ' + this.user);
  }
}
