package com.geekykel.service;


import com.geekykel.model.User;

import java.util.List;
import java.util.Optional;

/**
 * @author Kelvin
 *
 */
public interface UserService {

    Optional<User> getUser(Long id);

    List<User> getAllUsers();

}
