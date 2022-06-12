import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../modelos/usuario';
import { LoginService } from '../../servicios/login.service';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario: Usuario = new Usuario();
  clave: String = '';

  constructor(private _loginService: LoginService) {}

  ngOnInit(): void {}

  login() {
    console.log(
      'usuario= ' + this.usuario.user + ' clave= ' + this.usuario.clave
    );

    this._loginService
      .login(this.usuario.user, this.usuario.clave)
      .subscribe((data) => {
        if (data.id > 0) {
          console.log('se logeo exitosamente');
          console.log(data);
        } else {
          Swal.fire({
            title: 'Error!',
            text: 'Usuario o Clave Incorrecta',
            type: 'error',
            // warning,
            // error,
            // success,
            // info,
            // question
            confirmButtonText: 'Ok',
          });
        }
      });
  }
}
