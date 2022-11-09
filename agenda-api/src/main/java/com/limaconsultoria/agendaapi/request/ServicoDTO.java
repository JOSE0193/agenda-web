package com.limaconsultoria.agendaapi.request;

import lombok.Data;

import javax.validation.constraints.NotEmpty;

@Data
public class ServicoDTO {

    private Long id;

    @NotEmpty(message = "Nome do serviço é obrigatório")
    private String nome;

    private String categoria;

}
