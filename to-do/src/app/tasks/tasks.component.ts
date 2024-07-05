import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { type Task, type NewTaskData } from './task/task.model';
import { AddTaskComponent } from './add-task/add-task.component';


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  // @Input() name!: string;
  tasks = [
    {
      id: '1',
      name: 'Task1',
      // todo: false,
      // completed: true,
    },
    {
      id: '2',
      name: 'Task2',
      // todo: true,
      // completed: false,
    },
    {
      id: '3',
      name: 'Task3',
      // todo: false,
      // completed: true,
    },
  ];

  ngOnInit() {
    console.log('Initial task list:', this.tasks);
  }

  onCancelTask(id: string)
  {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    console.log('Task canceled:', id);
  }

  onAddTask(taskData: NewTaskData)
  {
    this.tasks.unshift({
      id: taskData.id,
      name: taskData.name,
      // todo: false,
      // completed: false
    })
    console.log('Task added: ID =', taskData.id, ', Name =', taskData.name);
  }

//   trackById(index: number, task: Task) {
//     return task.id;
//   }
}
