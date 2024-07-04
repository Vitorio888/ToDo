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
      name: 'Tasks1',
    },
    {
      name: 'Tasks2',
    },
    {
      name: 'Tasks3',
    },
    {
      name: 'Tasks4',
    },
    {
      name: 'Tasks5',
    },
    {
      name: 'Tasks6',
    },
  ];

  onCancelTask(name: string)
  {
    this.tasks = this.tasks.filter((task) => task.name !== name);
  }

  // onCompletedTask(name: string)
  // {
  //   this.tasks = this.tasks.filter((task) => task.name !== name);
  // }

  onAddTask(taskData: NewTaskData)
  {
    this.tasks.unshift({
      name: taskData.name
    })
  }
}
