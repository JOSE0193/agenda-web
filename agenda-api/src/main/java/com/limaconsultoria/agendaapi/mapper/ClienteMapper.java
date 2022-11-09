package com.limaconsultoria.agendaapi.mapper;

import com.limaconsultoria.agendaapi.domain.Cliente;
import com.limaconsultoria.agendaapi.request.ClienteDTO;
import org.springframework.stereotype.Component;

@Component
public class  ClienteMapper {

    public Cliente toEntity(ClienteDTO clienteDTO) {

        Cliente cliente = new Cliente();
        cliente.setNome(clienteDTO.getNome());
        cliente.setCpf(clienteDTO.getCpf());
        cliente.setDataNascimento(clienteDTO.getDataNascimento());
        cliente.setSexo(clienteDTO.getSexo());
        cliente.setEmail(clienteDTO.getEmail());
        return cliente;

    }
}

