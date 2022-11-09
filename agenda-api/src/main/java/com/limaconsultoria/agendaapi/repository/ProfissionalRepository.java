package com.limaconsultoria.agendaapi.repository;

import com.limaconsultoria.agendaapi.domain.Profissional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProfissionalRepository extends JpaRepository<Profissional, Long> {

    List<Profissional> findByNome(String nome);

}
