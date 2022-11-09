package com.limaconsultoria.agendaapi.controller;

import com.limaconsultoria.agendaapi.domain.Empresa;
import com.limaconsultoria.agendaapi.request.EmpresaDTO;
import com.limaconsultoria.agendaapi.service.EmpresaService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RequestMapping("empresas")
@RestController
@RequiredArgsConstructor
public class EmpresaController {

    private final EmpresaService empresaService;

    @GetMapping
    public ResponseEntity<List<Empresa>> list() {
        return ResponseEntity.ok(empresaService.listAll());
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Empresa> findById(@PathVariable Long id) {
        return ResponseEntity.ok(empresaService.findByIdThrowBadRequestException(id));
    }

    @GetMapping(path = "/find")
    public ResponseEntity<List<Empresa>> findByNome(@RequestParam String nome) {
        return ResponseEntity.ok(empresaService.findByNome(nome));
    }

    @PostMapping
    public ResponseEntity<Empresa> save(@RequestBody @Valid EmpresaDTO empresaDTO) {
        Empresa empresaSave = empresaService.save(empresaDTO);
        return new ResponseEntity<>(empresaSave, HttpStatus.CREATED);
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        empresaService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping
    public ResponseEntity<Void> replace(@RequestBody EmpresaDTO empresaDTO) {
        empresaService.replace(empresaDTO);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
}
