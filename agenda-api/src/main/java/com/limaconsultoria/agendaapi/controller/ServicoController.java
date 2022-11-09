package com.limaconsultoria.agendaapi.controller;

import com.limaconsultoria.agendaapi.domain.Servico;
import com.limaconsultoria.agendaapi.request.ServicoDTO;
import com.limaconsultoria.agendaapi.service.ServicoService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RequestMapping("servicos")
@RestController
@RequiredArgsConstructor
public class ServicoController {

    private final ServicoService servicoService;

    @GetMapping
    public ResponseEntity<List<Servico>> list() {
        return ResponseEntity.ok(servicoService.listAll());
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Servico> findById(@PathVariable Long id) {
        return ResponseEntity.ok(servicoService.findByIdThrowBadRequestException(id));
    }

    @GetMapping(path = "/find")
    public ResponseEntity<List<Servico>> findByNome(@RequestParam String nome) {
        return ResponseEntity.ok(servicoService.findByNome(nome));
    }

    @PostMapping
    public ResponseEntity<Servico> save(@RequestBody @Valid ServicoDTO servicoDTO) {
        Servico servicoSave = servicoService.save(servicoDTO);
        return new ResponseEntity<>(servicoSave, HttpStatus.CREATED);
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        servicoService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping
    public ResponseEntity<Void> replace(@RequestBody ServicoDTO servicoDTO) {
        servicoService.replace(servicoDTO);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
}
