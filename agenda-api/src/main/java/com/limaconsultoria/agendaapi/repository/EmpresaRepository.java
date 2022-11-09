package com.limaconsultoria.agendaapi.repository;

import com.limaconsultoria.agendaapi.domain.Empresa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmpresaRepository extends JpaRepository<Empresa, Long> {

    List<Empresa> findByNome(String nome);

}
