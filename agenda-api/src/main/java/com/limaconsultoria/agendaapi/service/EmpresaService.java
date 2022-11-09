package com.limaconsultoria.agendaapi.service;

import com.limaconsultoria.agendaapi.domain.Empresa;
import com.limaconsultoria.agendaapi.exception.BadRequestException;
import com.limaconsultoria.agendaapi.mapper.EmpresaMapper;
import com.limaconsultoria.agendaapi.repository.EmpresaRepository;
import com.limaconsultoria.agendaapi.request.EmpresaDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class EmpresaService {

    private final EmpresaRepository empresaRepository;
    private final EmpresaMapper empresaMapper;

    public List<Empresa> listAll() {
        return empresaRepository.findAll();
    }

    public List<Empresa> findByNome(String nome) {
        return empresaRepository.findByNome(nome);
    }

    public Empresa findByIdThrowBadRequestException(Long id) {
        return empresaRepository.findById(id)
                .orElseThrow(() -> new BadRequestException("Empresa not Found"));
    }

    public Empresa save(EmpresaDTO empresaDTO) {
        Empresa empresa = empresaMapper.toEntity(empresaDTO);
        empresa = empresaRepository.save(empresa);
        return empresa;
    }

    public void delete(Long id) {
        empresaRepository.deleteById(id);
    }

    public void replace(EmpresaDTO empresaDTO) {
        Empresa savedEmpresa = findByIdThrowBadRequestException(empresaDTO.getId());
        Empresa empresa = empresaMapper.toEntity(empresaDTO);
        empresa.setId(savedEmpresa.getId());
        empresaRepository.save(empresa);

    }
}
