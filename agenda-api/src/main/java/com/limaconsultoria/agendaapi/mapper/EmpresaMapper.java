package com.limaconsultoria.agendaapi.mapper;

import com.limaconsultoria.agendaapi.domain.Empresa;
import com.limaconsultoria.agendaapi.request.EmpresaDTO;
import org.springframework.stereotype.Component;

@Component
public class EmpresaMapper {

    public Empresa toEntity(EmpresaDTO empresaDTO) {

        Empresa empresa = new Empresa();
        empresa.setNome(empresaDTO.getNome());
        empresa.setCnpj(empresaDTO.getCnpj());
        empresa.setEmail(empresaDTO.getEmail());
        return empresa;

    }
}
