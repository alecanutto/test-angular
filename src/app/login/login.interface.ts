import { Account } from '../shared/interfaces/account.interface';
import { User } from '../shared/interfaces/user.interface';

export interface LoginCredenciais {
  usuario: string;
  senha: string;
}

export interface LoginResponse {
  conta: Account,
  contaCredito: Account,
  dataFim: Date;
  dataInicio: Date;
  token: string;
  usuario: User;
}