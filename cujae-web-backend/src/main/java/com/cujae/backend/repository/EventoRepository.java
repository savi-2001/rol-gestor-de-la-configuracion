package com.cujae.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.cujae.backend.model.Evento;

public interface EventoRepository extends JpaRepository<Evento, Long> {
}
