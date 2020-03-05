package com.geekykel;

import com.geekykel.model.ERole;
import com.geekykel.model.Role;
import com.geekykel.model.User;
import com.geekykel.repository.RoleRepository;
import com.geekykel.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.Arrays;
import java.util.Date;
import java.util.HashSet;

@SpringBootApplication
public class BwgalaxyApplication {

    public static void main(String[] args) {
        SpringApplication.run(BwgalaxyApplication.class, args);
    }

    @Bean
    CommandLineRunner runner(RoleRepository roleRepository) {
        return args -> {
            roleRepository.save(new Role(1L, ERole.ROLE_USER));
            roleRepository.save(new Role(2L, ERole.ROLE_ADMIN));

        };
    }
}
