package com.limaconsultoria.agendaapi.controller;

import com.limaconsultoria.agendaapi.domain.Agendamento;
import com.limaconsultoria.agendaapi.request.AgendamentoDTO;
import com.limaconsultoria.agendaapi.service.AgendamentoService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RequestMapping("agendamentos")
@RestController
@RequiredArgsConstructor
public class AgendamentoController {

    private final AgendamentoService agendamentoService;

    @GetMapping
    public ResponseEntity<List<Agendamento>> list() {
        return ResponseEntity.ok(agendamentoService.listAll());
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Agendamento> findById(@PathVariable Long id) {
        return ResponseEntity.ok(agendamentoService.findByIdThrowBadRequestException(id));
    }

    @PostMapping
    public ResponseEntity<Agendamento> save(@RequestBody @Valid AgendamentoDTO agendamentoDTO) {
        Agendamento agendamentoSave = agendamentoService.save(agendamentoDTO);
        return new ResponseEntity<>(agendamentoSave, HttpStatus.CREATED);
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        agendamentoService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping
    public ResponseEntity<Void> replace(@RequestBody AgendamentoDTO agendamentoDTO) {
        agendamentoService.replace(agendamentoDTO);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
}