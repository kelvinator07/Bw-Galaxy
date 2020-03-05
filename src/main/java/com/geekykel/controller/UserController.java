package com.geekykel.controller;

import com.geekykel.exception.EntityNotFoundException;
import com.geekykel.model.User;
import com.geekykel.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

//import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/api")
public class UserController {

    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    private UserService userService;


    @GetMapping("/users/{id}")
    public ResponseEntity<?> getUser(@PathVariable Long id) {

        Optional<User> user = userService.getUser(id);

        return new ResponseEntity<>(user.get(), HttpStatus.OK);
    }

    @GetMapping("/users")
    public ResponseEntity<?> getAllUsers() {

        List<User> userList = userService.getAllUsers();

        return new ResponseEntity<>(userList, HttpStatus.OK);

    }


}
