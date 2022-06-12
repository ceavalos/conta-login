import { IUsuario } from '../interfaces/usuario';

export class Usuario implements IUsuario {
  id?: number;
  user?: string;
  clave?: string;
  nombre?: string;
  roles?: string;
  empresas?: string;
  empresa?: string;
  token?: string;
  image?: string;
}
