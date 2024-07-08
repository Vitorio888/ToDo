import { Component } from '@angular/core';
import { type Task, type NewTaskData } from './task/task.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class TasksComponent {
  tasks: Task[] = [
    {
      id: '1',
      name: 'Task1',
      status: 'todo',
    },
    {
      id: '2',
      name: 'Task2',
      status: 'completed',
    },
    {
      id: '3',
      name: 'Task3',
      status: 'canceled',
    },
  ];

  ngOnInit() {
    console.log('Initial task list:', this.tasks);
  }

  // onCancelTask(id: string)
  // {
  //   this.tasks = this.tasks.filter((task) => task.id !== id);
  //   console.log('Task canceled:', id);
  // }

  onAddTask(taskData: NewTaskData)
  {
    this.tasks.unshift({
      id: taskData.id,
      name: taskData.name,
      status: taskData.status
    })
    console.log('Update task list:', this.tasks);
    // console.log('Task added: ID =', taskData.id, ', Name =', taskData.name, ', Status =', taskData.status);
  }

  onStatusChange(updatedTask: Task) {
    const task = this.tasks.find(t => t.id === updatedTask.id);
    if (task) {
      task.status = updatedTask.status;
    }
    console.log('Update task list:', this.tasks);
  }
}
