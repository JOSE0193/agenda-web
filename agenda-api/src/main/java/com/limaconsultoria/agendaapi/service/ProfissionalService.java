package com.limaconsultoria.agendaapi.service;

import com.limaconsultoria.agendaapi.domain.Profissional;
import com.limaconsultoria.agendaapi.exception.BadRequestException;
import com.limaconsultoria.agendaapi.mapper.ProfissionalMapper;
import com.limaconsultoria.agendaapi.repository.ProfissionalRepository;
import com.limaconsultoria.agendaapi.request.ProfissionalDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProfissionalService {

    private final ProfissionalRepository profissionalRepository;
    private final ProfissionalMapper profissionalMapper;

    public List<Profissional> listAll() {
        return profissionalRepository.findAll();
    }

    public Profissional findByIdThrowBadRequestException(Long id) {
        return profissionalRepository.findById(id)
                .orElseThrow(() -> new BadRequestException("Profissional not Found"));
    }

    public List<Profissional> findByNome(String nome) {
        return profissionalRepository.findByNome(nome);
    }

    public Profissional save(ProfissionalDTO profissionalDTO) {
        Profissional profissional = profissionalMapper.toEntity(profissionalDTO);
        profissional = profissionalRepository.save(profissional);
        return profissional;
    }

    public void delete(Long id) {
        profissionalRepository.deleteById(id);
    }

    public void replace(ProfissionalDTO profissionalDTO) {
        Profissional savedProfissional = findByIdThrowBadRequestException(profissionalDTO.getId());
        Profissional profissional = profissionalMapper.toEntity(profissionalDTO);
        profissional.setId(savedProfissional.getId());
        profissionalRepository.save(profissional);

    }
}
