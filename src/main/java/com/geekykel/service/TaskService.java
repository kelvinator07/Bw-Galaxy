package com.geekykel.service;

import com.geekykel.model.Task;
import com.geekykel.payload.request.TaskRequest;

import java.util.List;

public interface TaskService {

    Task saveTask(TaskRequest taskRequest);

    Task updateTask(Task task);

    Task getSingleTask(Long id);

    List<Task> getAllTasks();

    List<Task> getAllTasksByUser(Long id);

    List<Task> getAllTasksByStatus(boolean completed);

    void deleteTask(Long id);
}
