import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgClass } from "@angular/common";
import { MaterialModule } from "./material/material.module";


import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { TasksComponent } from "./tasks/tasks.component";
import { AddTaskComponent } from "./tasks/add-task/add-task.component";
import { TaskComponent } from "./tasks/task/task.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";



@NgModule ({
  declarations: [
    AppComponent,
    HeaderComponent,
    TasksComponent,
    AddTaskComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,  
    FormsModule,
    NgClass,
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}