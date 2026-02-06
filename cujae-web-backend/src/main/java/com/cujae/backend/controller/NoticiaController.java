package com.cujae.backend.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.cujae.backend.model.Noticia;
import com.cujae.backend.repository.NoticiaRepository;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/noticias")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class NoticiaController {
    private final NoticiaRepository repo;

    @GetMapping
    public List<Noticia> all() {
        return repo.findAll();
    }

    @PostMapping
    public ResponseEntity<?> create(@RequestBody Noticia n) {
        n.setFecha(LocalDateTime.now());
        return ResponseEntity.ok(repo.save(n));
    }
}
