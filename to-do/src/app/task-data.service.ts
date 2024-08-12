import { Injectable } from '@angular/core';
import { ITask } from './types';

/* Use this service as shared service, to task view component */
@Injectable({
  providedIn: 'root',
})
export class TaskDataService {
  constructor() {}


  private tasks: ITask[] = [
    // {
    //   description: 'Task1',
    //   users: [
    //     {
    //       name: 'Name',
    //       email: 'Email',
    //     }
    //   ]
    // },
  ];

  getTasks(): ITask[] {
    return this.tasks;
  }

  public addTask(task: ITask) {
    /* write logic */
    this.tasks.push(task);
  }

  
}
