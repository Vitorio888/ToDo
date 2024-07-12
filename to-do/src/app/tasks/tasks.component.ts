import { Component, Input } from '@angular/core';
import { type Task, type NewTaskData } from './task/task.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class TasksComponent {
  @Input({required: true}) userId!: string;
  @Input({required: true}) name!: string;

  tasks: Task[] = [
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

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  ngOnInit() {
    console.log('Initial task list:', this.tasks);
  }

  onAddTask(taskData: NewTaskData, userId: string)
  {
    this.tasks.unshift({
      id: taskData.id,
      userId: userId,
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
