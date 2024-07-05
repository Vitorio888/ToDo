import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Task } from './task.model';
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
  completed = false;

  onToDo() {
    console.log('Clicked Todo!');
    this.todo = !this.todo;
  }

  onCompleteTask() {
    console.log('Clicked Cancel !');
    this.completed = !this.completed;
  }

  onCancel() {
    console.log('Clicked Complete !');
    this.cancel.emit(this.task.id);
  }
}
