package com.limaconsultoria.agendaapi.request;

import lombok.Data;

import javax.validation.constraints.NotNull;

@Data
public class AgendamentoDTO {

    private Long id;

    @NotNull(message = "Data do agendamento é obrigatória")
    private String data;

    private String observacoes;

}
