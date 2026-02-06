package com.cujae.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.cujae.backend.model.Actividad;

public interface ActividadRepository extends JpaRepository<Actividad, Long> {
}
