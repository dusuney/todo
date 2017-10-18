import { Component, OnInit } from "@angular/core";
import { TaskService } from "../task.service";
import { Task } from "../task";

@Component({
    selector: "add-task",
    templateUrl: "./build/app/addTask/addTask.component.html"
})
export class AddTaskComponent {
    task: Task = { id: null, name: '', text: '' };

    ngOnInit() {
        console.log("Application component initialized ...");
    }

    addTask(): void {
        console.log(this.task);
        this.taskService.create(this.task)
            .then(task => { });
    }

    constructor(public taskService: TaskService) { }
}