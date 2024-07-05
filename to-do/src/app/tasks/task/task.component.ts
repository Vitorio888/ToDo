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
  @Output() statusChange = new EventEmitter<Task>();
  // @Output() cancel = new EventEmitter<string>();

  onToDo() {
    // console.log('Clicked Todo!');
    this.task.status = 'todo';
    this.statusChange.emit(this.task);
  }

  onCompleteTask() {
    // console.log('Clicked Cancel !');
    this.task.status = 'completed';
    this.statusChange.emit(this.task);
  }

  onCancel() {
    // console.log('Clicked Complete !');
    this.task.status = 'canceled';
    this.statusChange.emit(this.task);
  }
}
