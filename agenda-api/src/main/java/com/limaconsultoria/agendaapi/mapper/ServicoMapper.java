package com.limaconsultoria.agendaapi.mapper;

import com.limaconsultoria.agendaapi.domain.Servico;
import com.limaconsultoria.agendaapi.request.ServicoDTO;
import org.springframework.stereotype.Component;

@Component
public class ServicoMapper {

    public Servico toEntity(ServicoDTO servicoDTO) {

        Servico servico = new Servico();
        servico.setNome(servicoDTO.getNome());
        servico.setCategoria(servicoDTO.getCategoria());
        return servico;

    }
}
