package com.limaconsultoria.agendaapi.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Builder
@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Profissional {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_PROFISSIONAL")
    private Long id;

    @NotNull
    @Column(name = "NOME")
    private String nome;

    @Column(name = "EMAIL")
    private String email;

    @JsonIgnore
    @OneToMany(mappedBy = "profissional")
    private List<Agendamento> agendamentos;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "profissional_servico",
            joinColumns = @JoinColumn(name = "ID_PROFISSIONAL"),
            inverseJoinColumns = @JoinColumn(name = "ID_SERVICO"))
    @JsonIgnore
    private List<Servico> servicos;

}
