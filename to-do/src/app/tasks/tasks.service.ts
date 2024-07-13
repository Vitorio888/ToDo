import { Injectable } from "@angular/core";
import { type Task, type NewTaskData } from "./task/task.model";
import { v4 as uuidv4} from 'uuid';

@Injectable({providedIn: 'root'})
export class TasksService {
  private tasks: Task[] = [
    {
      id: '1',
      userId: 'u1',
      name: 'Task1',
      status: 'todo',
    },
    {
      id: '2',
      userId: 'u2',
      name: 'Task2',
      status: 'completed',
    },
    {
      id: '3',
      userId: 'u3',
      name: 'Task3',
      status: 'canceled',
    },
  ];

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskData: NewTaskData, userId: string) {
    const newTaskId = uuidv4();
    const status = 'todo';
    this.tasks.unshift({
      id: newTaskId,
      userId: userId,
      name: taskData.name,
      status: status
    })
    // console.log('Update task list:', this.tasks);
    this.saveTasks();
  }

  changeStatus(updatedTask: Task) {
    const task = this.tasks.find((task) => task.id === updatedTask.id);
    
    if (task) {
      task.status = updatedTask.status;
    }

    // console.log('Update task list:', this.tasks);
    this.saveTasks();
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }
}