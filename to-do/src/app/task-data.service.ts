import { Injectable } from '@angular/core';

/* Use this service as shared service, to task view component */
@Injectable({
  providedIn: 'root',
})
export class TaskDataService {
  constructor() {}

  public addTask(task: ITask) {
    /* write logic */
  }
}
