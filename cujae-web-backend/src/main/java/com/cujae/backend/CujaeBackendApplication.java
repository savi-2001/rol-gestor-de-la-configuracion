package com.cujae.backend;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.cujae.backend.model.Usuario;
import com.cujae.backend.model.Role;
import com.cujae.backend.repository.UsuarioRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class CujaeBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(CujaeBackendApplication.class, args);
    }

    @Bean
    CommandLineRunner run(UsuarioRepository usuarioRepository) {
        return args -> {
            if (usuarioRepository.count() == 0) {
                BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
                Usuario admin = new Usuario();
                admin.setNombre("Admin");
                admin.setEmail("admin@cujae.edu.cu");
                admin.setPassword(encoder.encode("admin123"));
                admin.setRole(Role.ADMIN);
                usuarioRepository.save(admin);
                System.out.println("Seeded admin user: admin@cujae.edu.cu / admin123");
            }
        };
    }
}
