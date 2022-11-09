package com.limaconsultoria.agendaapi.repository;

import com.limaconsultoria.agendaapi.domain.Servico;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ServicoRepository extends JpaRepository<Servico, Long> {

    List<Servico> findByNome(String nome);

}
