import {Component, OnInit} from '@angular/core';
import {Task} from "../../models/Task";
import {TaskService} from "../../tasks/task.service";

@Component({
    selector: 'app-tasks-list',
    templateUrl: './tasks-list.component.html',
    styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

    tasks: Task[] = [];
    loading: boolean;

    constructor(private taskService: TaskService) {
    }

    ngOnInit() {
        this.loading = true;
        this.taskService.getTasks()
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
        console.log('Task Has Changed Again');
        this.taskService.updateTask(task, event.target.checked).subscribe();
        return task.completed;
    }

    getDueDateLabel(task: Task) {
        return task.completed ? 'label-success' : 'label-primary';
    }

}
