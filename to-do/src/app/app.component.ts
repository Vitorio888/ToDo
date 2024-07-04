import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgModule } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { TasksComponent } from './tasks/tasks.component';

@NgModule ({
  imports: [
   
  ]
})

class AppModule {}

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, TasksComponent]
})
export class AppComponent {
  title = 'to-do';
}

