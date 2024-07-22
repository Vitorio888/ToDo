import { Component, inject, Input } from '@angular/core';
import { type MultiTask } from './multitask.model';
import { MultiTasksService } from '../multitasks.service';

@Component({
  selector: 'app-multitask',
  templateUrl: './multitask.component.html',
  styleUrl: './multitask.component.css'
})
export class MultitaskComponent {
  @Input({required: true}) multiTask!: MultiTask;

  private multiTasksService = inject(MultiTasksService);

  onToDoTask() {
    this.multiTask.status = 'todo';
    this.multiTasksService.changeStatus(this.multiTask);
  }

  onCompleteTask() {
    this.multiTask.status = 'completed';
    this.multiTasksService.changeStatus(this.multiTask);
  }

  onCancelTask() {
    this.multiTask.status = 'canceled';
    this.multiTasksService.changeStatus(this.multiTask);
  }

  onDeleteTask() {
    this.multiTasksService.removeMultiTask(this.multiTask.id);
  }
}
