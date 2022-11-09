package com.limaconsultoria.agendaapi.controller;

import com.limaconsultoria.agendaapi.domain.Profissional;
import com.limaconsultoria.agendaapi.request.ProfissionalDTO;
import com.limaconsultoria.agendaapi.service.ProfissionalService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RequestMapping("profissionais")
@RestController
@RequiredArgsConstructor
public class ProfissionalController {

    private final ProfissionalService profissionalService;

    @GetMapping
    public ResponseEntity<List<Profissional>> list() {
        return ResponseEntity.ok(profissionalService.listAll());
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Profissional> findById(@PathVariable Long id) {
        return ResponseEntity.ok(profissionalService.findByIdThrowBadRequestException(id));
    }

    @GetMapping(path = "/find")
    public ResponseEntity<List<Profissional>> findById(@RequestParam String nome) {
        return ResponseEntity.ok(profissionalService.findByNome(nome));
    }

    @PostMapping
    public ResponseEntity<Profissional> save(@RequestBody @Valid ProfissionalDTO profissionalDTO) {
        Profissional profissionalSave = profissionalService.save(profissionalDTO);
        return new ResponseEntity<>(profissionalSave, HttpStatus.CREATED);
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        profissionalService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping
    public ResponseEntity<Void> replace(@RequestBody ProfissionalDTO profissionalDTO) {
        profissionalService.replace(profissionalDTO);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
}
