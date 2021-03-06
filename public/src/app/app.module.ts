import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import { AddTaskComponent } from "./addTask/addTask.component";
import { ViewTaskComponent } from "./viewTask/viewTask.component";
import { TasksComponent } from "./tasks/tasks.component";

import { routing, appRoutingProviders } from './app.routing';
import { FormsModule } from "@angular/forms";
import {TaskService} from './task.service';
import { HttpModule } from '@angular/http';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        HttpModule
    ],
    declarations: [
        AppComponent,
        AddTaskComponent,
        ViewTaskComponent,
        TasksComponent
    ],
    providers: [
        appRoutingProviders,
        TaskService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}