import { AccountPlan } from "./account-plan.interface";
export interface Transactions {
    conta: number;
    data: string;
    descricao: string;
    id: number;
    planoConta: AccountPlan;
    tipo: string;
    valor: number;
}