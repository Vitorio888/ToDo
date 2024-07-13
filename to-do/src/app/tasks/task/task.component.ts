import { Component, inject, Input } from '@angular/core';
import { type Task } from './task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) task!: Task;

  private tasksService = inject(TasksService);


  onToDoTask() {
    this.task.status = 'todo';
    this.tasksService.changeStatus(this.task);
  }

  onCompleteTask() {
    this.task.status = 'completed';
    this.tasksService.changeStatus(this.task);
  }

  onCancelTask() {
    this.task.status = 'canceled';
    this.tasksService.changeStatus(this.task);
  }

  onDeleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}
