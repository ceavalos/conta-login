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

  constructor(private _loginService: LoginService) {}

  ngOnInit(): void {}

  login() {
    console.log(
      'usuario= ' + this.usuario.user + ' clave= ' + this.usuario.clave
    );

    this._loginService
      .login(this.usuario.user, this.usuario.clave)
      .subscribe((data) =>{
         IF(data.id >0) THEN
           console.log("se logeo exitosamente");
         ELSE
           console.log("Fallo al logearse");
         END

      });
    //this._empresaService.getAll().then((data) => (this.empresas = data));
    // console.log(' user= ' + this.user);
  }
}
