import { Component, OnInit } from '@angular/core';
import { MultiTasksService } from './multitasks.service';
import { MultiTask } from './multitask/multitask.model';
import { DATA_MULTI_TASK } from '../data-multi-tasks';

@Component({
  selector: 'app-multitasks',
  templateUrl: './multitasks.component.html',
  styleUrl: './multitasks.component.css'
})
export class MultitasksComponent implements OnInit {

  multiTasks: MultiTask[] = [];

  constructor(private multiTasksService: MultiTasksService) {}

  ngOnInit(): void {
    this.getMultiTasks();
  }

  getMultiTasks(): void {
    this.multiTasksService.getMultiTasks().subscribe((multiTasks) => {
      this.multiTasks = multiTasks;
    });
  }
  
}
