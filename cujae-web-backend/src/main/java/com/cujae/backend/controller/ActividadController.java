package com.cujae.backend.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import com.cujae.backend.model.Actividad;
import com.cujae.backend.repository.ActividadRepository;
import java.util.List;

@RestController
@RequestMapping("/api/actividades")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class ActividadController {
    private final ActividadRepository repo;

    @GetMapping
    public List<Actividad> all() { return repo.findAll(); }

    @PostMapping
    public Actividad create(@RequestBody Actividad a) { return repo.save(a); }
}
