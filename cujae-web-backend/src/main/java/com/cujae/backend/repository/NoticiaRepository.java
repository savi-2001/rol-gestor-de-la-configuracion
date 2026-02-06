package com.cujae.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.cujae.backend.model.Noticia;

public interface NoticiaRepository extends JpaRepository<Noticia, Long> {
}
