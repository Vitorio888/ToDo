import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { NgClass } from "@angular/common";
import { MaterialModule } from "./material/material.module";


import { AppComponent } from "./app.component";
import { CardComponent } from "./shared/card/card.component";

import { TaskAddFormComponent } from "./task-add-form/task-add-form.component";
import { TasksViewComponent } from "./tasks-view/tasks-view.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";



@NgModule ({
  declarations: [
    AppComponent,
    CardComponent,
    TaskAddFormComponent,
    TasksViewComponent
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