package com.limaconsultoria.agendaapi.request;

import lombok.Data;

import javax.validation.constraints.NotEmpty;

@Data
public class ProfissionalDTO {

    private Long id;

    @NotEmpty(message = "The profissional name cannot be empty")
    private String nome;

    private String email;

}
