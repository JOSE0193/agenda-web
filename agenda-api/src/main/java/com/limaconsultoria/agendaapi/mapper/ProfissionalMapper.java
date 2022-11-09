package com.limaconsultoria.agendaapi.mapper;

import com.limaconsultoria.agendaapi.domain.Profissional;
import com.limaconsultoria.agendaapi.request.ProfissionalDTO;
import org.springframework.stereotype.Component;

@Component
public class ProfissionalMapper {

    public Profissional toEntity(ProfissionalDTO profissionalDTO) {

        Profissional profissional = new Profissional();
        profissional.setNome(profissionalDTO.getNome());
        profissional.setEmail(profissionalDTO.getEmail());
        return profissional;

    }
}
