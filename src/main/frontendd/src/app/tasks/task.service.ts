import {HttpClient} from "@angular/common/http";
import {EventEmitter, Injectable} from "@angular/core";
import {Task} from "../models/Task";

@Injectable({ providedIn: 'root' })
export class TaskService {

    onTaskAdded = new EventEmitter();

    private url: string = "http://localhost:9090/api/";

    constructor(private http: HttpClient) {
    }

    getTasks(){
        return this.http.get<any[]>(this.url + 'tasks');
            //.map(response => response.json());
    }

    getUserTasks(id){
      return this.http.get<any[]>(this.url+ `users/${id}/tasks`);
      //.map(response => response.json());
    }

    updateTask(task: Task, checked: boolean) {
        task.completed = checked;
        return this.http.put(this.url + 'tasks', task);
    }

    addTask(task) {
        return this.http.post(this.url + 'tasks', task);
    }
}
