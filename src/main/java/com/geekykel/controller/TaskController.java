package com.geekykel.controller;

import com.geekykel.exception.EntityNotFoundException;
import com.geekykel.model.Task;
import com.geekykel.payload.request.TaskRequest;
import com.geekykel.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/api")
public class TaskController {

    @Autowired
    private TaskService taskService;

    @GetMapping("/tasks/{id}")
    public ResponseEntity<?> getTask(@PathVariable Long id) {

        Task task = taskService.getSingleTask(id);

        return new ResponseEntity<>(task, HttpStatus.OK);
    }

    @PostMapping("/tasks")
    public ResponseEntity<?> saveTask(@RequestBody TaskRequest taskRequest) {

        Task savedTask =  taskService.saveTask(taskRequest);

        return new ResponseEntity<>(savedTask, HttpStatus.CREATED);
    }

    @PutMapping("/tasks")
    public ResponseEntity<?> updateTask(@RequestBody Task task) {

        Task newTask = taskService.updateTask(task);

        return new ResponseEntity<>(newTask, HttpStatus.OK);
    }

    @GetMapping("/tasks")
    public ResponseEntity<?> listTasks() {

        List<Task> taskList = taskService.getAllTasks();

        return new ResponseEntity<>(taskList, HttpStatus.OK);
    }

    @GetMapping("/users/{userId}/tasks")
    public ResponseEntity<?> listTasksByUser(@PathVariable Long userId) {

        List<Task> taskList = taskService.getAllTasksByUser(userId);

        return new ResponseEntity<>(taskList, HttpStatus.OK);
    }

    @GetMapping("/tasks/status/{completed}")
    public ResponseEntity<?> listTasksByStatus(@PathVariable boolean completed) {

        List<Task> taskList = taskService.getAllTasksByStatus(completed);

        return new ResponseEntity<>(taskList, HttpStatus.OK);
    }

    @DeleteMapping("/tasks/{id}")
    public ResponseEntity<?> deleteTask(@PathVariable Long id) {

//        if (!user.isPresent()) {
//            throw new EntityNotFoundException("Task not found with id " + id);
//        }

        taskService.deleteTask(id);

        return new ResponseEntity<>("Successfully deleted!", HttpStatus.OK);
    }


}
