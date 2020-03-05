package com.geekykel.service;

import com.geekykel.exception.EntityNotFoundException;
import com.geekykel.model.ERole;
import com.geekykel.model.Role;
import com.geekykel.model.User;
import com.geekykel.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

/**
 * @author Kelvin
 *
 */
@Service
public class UserServiceImpl implements UserService {

    private static final Logger logger = LoggerFactory.getLogger(UserServiceImpl.class);

    @Autowired
    private UserRepository userRepository;


    @Override
    public Optional<User> getUser(Long id) {

        Optional<User> user = userRepository.findById(id);

        if (!user.isPresent()) {
            throw new EntityNotFoundException("User not found with id " + id);
        }

        user.get().setPassword(null);

        return user;
    }

    @Override
    public List<User> getAllUsers() {

        List<User> userList = userRepository.findAll();

//        for (User user: userList) {
//            user.setPassword(null);
//
//            logger.info("User Role " + user.getRoles());
//            logger.info("User Role " + user.getRoles().toString());
//            logger.info("User getRoles " + user.getRoles().contains("ROLE_USER"));
//
//            if (user.getRoles() == ERole.ROLE_ADMIN) {
//                userList.remove(user);
//            }
//        }

        return userList;
    }
}
