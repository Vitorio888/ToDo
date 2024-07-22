import { Injectable } from "@angular/core";
import { v4 as uuidv4} from 'uuid';
import { type MultiTask, type NewMultiTaskData } from "./multitask/multitask.model";
import { Observable, of } from "rxjs";

@Injectable({providedIn: 'root'})
export class MultiTasksService {

  private multiTasks: MultiTask[] = [
    {
      id: '1',
      userName: 'Gio',
      taskName: 'Task1',
      status: 'todo',
    },
    {
      id: '2',
      userName: 'Misha',
      taskName: 'Task2',
      status: 'todo',
    },
    {
      id: '3',
      userName: 'Mariam',
      taskName: 'Task3',
      status: 'todo',
    },
  ];

  constructor() {
    const multiTasks = localStorage.getItem('multiTasks');

    if (multiTasks) {
      this.multiTasks = JSON.parse(multiTasks);
    }
  }

  private saveMultiTasks() {
    localStorage.setItem('multiTasks', JSON.stringify(this.multiTasks));
  }

  getMultiTasks(): Observable<MultiTask[]> {
    return of(this.multiTasks);
  }

  // getMultiTasks(id: string) {
  //   return this.multiTasks.filter((multiTask) => multiTask.id === id);
  // }

  addMultiTask(taskData: NewMultiTaskData) {
    const newTaskId = uuidv4();
    const status = 'todo';
    this.multiTasks.unshift({
      id: newTaskId,
      userName: taskData.userName,
      taskName: taskData.taskName,
      status: status
    })

    this.saveMultiTasks();
  }

  changeStatus(updatedTask: MultiTask) {
    const multiTask = this.multiTasks.find((multiTask) => multiTask.id === updatedTask.id);
    
    if (multiTask) {
      multiTask.status = updatedTask.status;
    }

    this.saveMultiTasks();
  }

  removeMultiTask(id: string) {
    this.multiTasks = this.multiTasks.filter((multiTask) => multiTask.id !== id);
    this.saveMultiTasks();
  }
}