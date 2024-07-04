import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { type NewTaskData } from './task/task.model';
import { AddTaskComponent } from './add-task/add-task.component';


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input() name!: string;
  tasks = [
    {
      name: 'Task1',
    },
    {
      name: 'Task2',
    },
    {
      name: 'Task3',
    },
  ];

  onCancelTask(name: string)
  {
    this.tasks = this.tasks.filter((task) => task.name !== name);
  }

  onAddTask(taskData: NewTaskData)
  {
    this.tasks.unshift({
      name: taskData.name
    })
  }
}
