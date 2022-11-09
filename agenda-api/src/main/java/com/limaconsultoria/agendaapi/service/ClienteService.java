package com.limaconsultoria.agendaapi.service;

import com.limaconsultoria.agendaapi.domain.Cliente;
import com.limaconsultoria.agendaapi.exception.BadRequestException;
import com.limaconsultoria.agendaapi.mapper.ClienteMapper;
import com.limaconsultoria.agendaapi.repository.ClienteRepository;
import com.limaconsultoria.agendaapi.request.ClienteDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ClienteService {

    private final ClienteRepository clienteRepository;
    private final ClienteMapper clienteMapper;

    public List<Cliente> listAll() {
        return clienteRepository.findAll();
    }

    public List<Cliente> findByNome(String nome) {
        return clienteRepository.findByNome(nome);
    }

    public Cliente findByIdThrowBadRequestException(Long id) {
        return clienteRepository.findById(id)
                .orElseThrow(() -> new BadRequestException("Cliente is not Found"));
    }

    public Cliente save(ClienteDTO clienteDTO) {
        Cliente cliente = clienteMapper.toEntity(clienteDTO);
        cliente = clienteRepository.save(cliente);
        return cliente;
    }

    public void delete(Long id) {
        clienteRepository.deleteById(id);
    }

    public void replace(ClienteDTO clienteDTO) {
        Cliente savedCliente = findByIdThrowBadRequestException(clienteDTO.getId());
        Cliente cliente = clienteMapper.toEntity(clienteDTO);
        cliente.setId(savedCliente.getId());
        clienteRepository.save(cliente);

    }
}
