package com.cujae.backend.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import com.cujae.backend.model.Evento;
import com.cujae.backend.repository.EventoRepository;
import org.springframework.http.ResponseEntity;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/eventos")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class EventoController {
    private final EventoRepository repo;

    @GetMapping
    public List<Evento> all() { return repo.findAll(); }

    @PostMapping
    public ResponseEntity<?> create(@RequestBody Evento e) {
        e.setFecha(LocalDateTime.now());
        return ResponseEntity.ok(repo.save(e));
    }
}
