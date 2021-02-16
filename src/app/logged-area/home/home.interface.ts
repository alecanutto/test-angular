import { Transactions } from "src/app/shared/interfaces/transactions.interface";

export interface DashboardResponse {
  contaBanco: Conta;
  contaCredito: Conta;
}

interface Conta {
  id: number;
  lancamentos: Transactions;
  saldo: number;
}
