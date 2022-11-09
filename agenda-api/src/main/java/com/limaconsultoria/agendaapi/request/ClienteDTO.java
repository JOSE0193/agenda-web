package com.limaconsultoria.agendaapi.request;

import lombok.Data;

import javax.validation.constraints.NotEmpty;

@Data
public class ClienteDTO {

    private Long id;

    @NotEmpty(message = "Nome do cliente é obrigatório")
    private String nome;

    private String dataNascimento;

    private char sexo;

    private String cpf;

    private String email;

}
