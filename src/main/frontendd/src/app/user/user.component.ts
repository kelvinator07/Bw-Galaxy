import { Component, OnInit } from '@angular/core';
import {TaskService} from "../tasks/task.service";
import {Task} from "../models/Task";
import {TokenStorageService} from "../_services/token-storage.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  tasks: Task[] = [];
  userId: number;
  loading: boolean;

  constructor(private taskService: TaskService,
              private tokenStorage: TokenStorageService) {
    this.userId = this.tokenStorage.getUser().id;
  }

  ngOnInit() {
    this.loading = true;
    this.taskService.getUserTasks(this.userId)
      .subscribe(
        (tasks: any[]) => {
          this.tasks = tasks;
          this.loading = false;
        },
        (error) => {
          console.log(error);
          this.loading = false;
        }
      );

    this.taskService.onTaskAdded.subscribe(
      (task) => this.tasks.push(task)
    );
  }

  onTaskChange(event, task) {
    this.taskService.updateTask(task, event.target.checked).subscribe();
    return task.completed;
  }


}
