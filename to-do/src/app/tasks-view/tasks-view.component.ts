import { Component } from '@angular/core';
import { TaskDataService } from '../task-data.service';

@Component({
  selector: 'app-tasks-view',
  templateUrl: './tasks-view.component.html',
  styleUrl: './tasks-view.component.css',
})
export class TasksViewComponent {
  constructor(private taskService: TaskDataService) {}

  get tasks() {
    return this.taskService.getTasks();
  }
}
