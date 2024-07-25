import { Component, inject, Input, OnInit } from '@angular/core';
import { MultiTasksService } from './multitasks.service';
import { MultiTask } from './multitask/multitask.model';
import { DATA_MULTI_TASK } from '../data-multi-tasks';

@Component({
  selector: 'app-multitasks',
  templateUrl: './multitasks.component.html',
  styleUrl: './multitasks.component.css'
})
export class MultitasksComponent implements OnInit  {
  
  private multiTasksService = inject(MultiTasksService);

  multiTasks: MultiTask[] = [];

  ngOnInit(): void {
    this.getMultiTasks();
  }

  getMultiTasks() {
    this.multiTasksService.getMultiTasks().subscribe((multiTasks) => {
      this.multiTasks = multiTasks;
    });
  }

  // @Input({required: true}) taskId!: string;
  // constructor(private multiTasksService: MultiTasksService) {}

  // get loadedTask() {
  //   return this.multiTasksService.getMultiTasks(this.taskId);
  // }
  
}
