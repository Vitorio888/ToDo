import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { NgClass } from "@angular/common";
import { MaterialModule } from "./material/material.module";


import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UsersComponent } from "./user/user.component";
import { TasksComponent } from "./tasks/tasks.component";
import { AddTaskComponent } from "./tasks/add-task/add-task.component";
import { TaskComponent } from "./tasks/task/task.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";



@NgModule ({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersComponent,
    TasksComponent,
    AddTaskComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgClass,
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}