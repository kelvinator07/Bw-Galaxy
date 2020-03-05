package com.geekykel.service;

import com.geekykel.exception.EntityNotFoundException;
import com.geekykel.model.Task;
import com.geekykel.model.User;
import com.geekykel.payload.request.TaskRequest;
import com.geekykel.repository.TaskRepository;
import com.geekykel.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class TaskServiceImpl implements TaskService {

    private static final Logger logger = LoggerFactory.getLogger(TaskServiceImpl.class);

    @Autowired
    private TaskRepository taskRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public Task saveTask(TaskRequest taskRequest) {

        Optional<User> user = userRepository.findById(taskRequest.getUserId());

        if (!user.isPresent()) {
            throw new EntityNotFoundException("User not found with id " + taskRequest.getUserId());
        }

        Task newTask = new Task(taskRequest.getTitle(), taskRequest.getDescription(),
                false, new Date());

        User newUser = user.get();

        newTask.setUser(newUser);

//        user.get().addTask(newTask);

        Task savedTask = new Task();

        try {
            savedTask = taskRepository.save(newTask);
        } catch (Exception e) {
            logger.info("An error occurred while saving... " + e);
        }

        if (savedTask == null){
            // something went wrong
        }

        return savedTask;

    }


    @Override
    public Task updateTask(Task task) {
        Optional<Task> newTask = taskRepository.findById(task.getId());
        newTask.get().setCompleted(task.getCompleted());
        return taskRepository.save(newTask.get());
    }

    @Override
    public Task getSingleTask(Long id) {
        return taskRepository.findById(id).get();
    }

    @Override
    public List<Task> getAllTasks() {
        return taskRepository.findByOrderByCreatedAtDesc();
    }

    @Override
    public List<Task> getAllTasksByUser(Long id) {

        Optional<User> user = userRepository.findById(id);

        if (!user.isPresent()) {
            // User not found
        }

        return user.get().getTaskList();

//        return taskRepository.findByUserId(id);
    }

    @Override
    public List<Task> getAllTasksByStatus(boolean completed) {
        return taskRepository.findByCompletedOrderByCreatedAtDesc(completed);
    }

    @Override
    public void deleteTask(Long id) {

        Optional<Task> task = taskRepository.findById(id);

        if (!task.isPresent()) {
            throw new EntityNotFoundException("Task not found with id " + id);
        }

        try {
            taskRepository.deleteById(id);
        } catch (Exception e) {
            logger.info("An error occurred while deleting... " + e);
//            throw new Exception("Something went wrong while trying to delete task");
        }
    }
}
