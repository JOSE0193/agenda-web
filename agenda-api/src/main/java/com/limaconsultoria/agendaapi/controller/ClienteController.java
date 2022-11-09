package com.limaconsultoria.agendaapi.controller;

import com.limaconsultoria.agendaapi.domain.Cliente;
import com.limaconsultoria.agendaapi.request.ClienteDTO;
import com.limaconsultoria.agendaapi.service.ClienteService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RequestMapping("clientes")
@RestController
@RequiredArgsConstructor
public class ClienteController {

    private final ClienteService clienteService;

    @GetMapping
    public ResponseEntity<List<Cliente>> list() {
        return ResponseEntity.ok(clienteService.listAll());
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Cliente> findById(@PathVariable Long id) {
        return ResponseEntity.ok(clienteService.findByIdThrowBadRequestException(id));
    }

    @GetMapping(path = "/find")
    public ResponseEntity<List<Cliente>> findByNome(@RequestParam String nome) {
        return ResponseEntity.ok(clienteService.findByNome(nome));
    }

    @PostMapping
    public ResponseEntity<Cliente> save(@RequestBody @Valid ClienteDTO clienteDTO) {
        Cliente clienteSave = clienteService.save(clienteDTO);
        return new ResponseEntity<>(clienteSave, HttpStatus.CREATED);
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        clienteService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping
    public ResponseEntity<Void> replace(@RequestBody ClienteDTO clienteDTO) {
        clienteService.replace(clienteDTO);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
}

