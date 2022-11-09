import { Agendamento } from './../agendamentos/agendamento';
import { Profissional } from './../profissionais/profissional';

export interface Servico {
  id: number;
  nome: string;
  categoria: string;
  profissionais: Profissional[];
  agendamentos: Agendamento[];
}
