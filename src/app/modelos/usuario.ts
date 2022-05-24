import { IUsuario } from '../interfaces/usuario';

export class Usuario implements IUsuario {
  user?: string;
  clave?: string;
  nombre?: string;
  roles?: string;
  empresas?: string;
  empresa?: string;
  token?: boolean;
  image?: string;
}
