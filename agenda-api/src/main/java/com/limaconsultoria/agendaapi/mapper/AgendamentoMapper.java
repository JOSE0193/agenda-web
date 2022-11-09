package com.limaconsultoria.agendaapi.mapper;

import com.limaconsultoria.agendaapi.domain.Agendamento;
import com.limaconsultoria.agendaapi.request.AgendamentoDTO;
import org.springframework.stereotype.Component;

@Component
public class AgendamentoMapper {

    public Agendamento toEntity(AgendamentoDTO agendamentoDTO) {
        Agendamento agendamento = new Agendamento();
        agendamento.setData(agendamentoDTO.getData());
        agendamento.setObservacoes(agendamentoDTO.getObservacoes());
        return agendamento;
    }

}
