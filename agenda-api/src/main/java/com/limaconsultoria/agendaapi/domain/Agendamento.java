package com.limaconsultoria.agendaapi.domain;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
@Entity
public class Agendamento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_AGENDAMENTO")
    private Long id;

    @NotNull
    @Column(name = "DATA")
    private String data;

    @Column(name = "OBSERVACOES")
    private String observacoes;

    @ManyToOne
    @JoinColumn(name = "CLIENTE_ID")
    private Cliente cliente;

    @ManyToOne
    @JoinColumn(name = "SERVICO_ID")
    private Servico servico;

    @ManyToOne
    @JoinColumn(name = "PROFISSIONAL_ID")
    private Profissional profissional;

}
