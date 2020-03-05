import {Component, OnInit} from '@angular/core';
import {TaskService} from "../../tasks/task.service";
import {Task} from "../../models/Task";
import {UserService} from "../../_services/user.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-tasks-add',
  templateUrl: './tasks-add.component.html',
  styleUrls: ['./tasks-add.component.css']
})
export class TasksAddComponent implements OnInit {

  users;
  task: Task = new Task();
  isSuccessful: boolean;
  isSignUpFailed: boolean;
  errorMessage;
  isLoading: boolean;

  constructor(private taskService: TaskService, private userService: UserService) {
    userService.getAllUsers().subscribe(value => {
      this.users = value;
    });

  }

  ngOnInit() {
  }

  saveTask(f: NgForm) {
    this.isLoading = true;
    this.taskService.addTask(this.task)
      .subscribe(
        (newTask) => {
          // clear the input
          f.resetForm();
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          // this.addTaskValue = ' ';
          this.taskService.onTaskAdded.emit(newTask);
          this.isLoading = false;
        },
        (error) => {
          this.errorMessage = error.error.message;
          this.isSignUpFailed = true;
          this.isLoading = false;
        }
      )
  }

}
