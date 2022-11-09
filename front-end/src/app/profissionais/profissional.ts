import { Agendamento } from './../agendamentos/agendamento';
import { Servico } from "../servico/servico";

export interface Profissional {
  id: number;
  nome: string;
  email: string;
  servicos: Servico[];
  agendamentos: Agendamento[]
}
