import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from './task.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [NgClass],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) task!: Task;
  @Output() cancel = new EventEmitter<string>();
  todo = false;
  // completed: boolean = false;

  // @Input({required: true}) task!: {
  //   name: string;
  // };

  onToDo() {
    console.log('Clicked Todo!');
    this.todo = !this.todo;
  }

  onCompleteTask() {
    console.log('Clicked Cancel !');
    // this.completed = true;
    this.cancel.emit(this.task.name);
  }

  onCancel() {
    console.log('Clicked Complete !');
    this.cancel.emit(this.task.name);
  }
}
