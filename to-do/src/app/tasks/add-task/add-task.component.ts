import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';
import { NgClass } from '@angular/common';



@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule, NgClass],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Output() add = new EventEmitter<NewTaskData>();
  enteredName = '';

  onSubmit() {
    console.log('addTask()');
    this.add.emit({
      name: this.enteredName.trim()
    });
    this.enteredName = '';
  }

  isDisabled() {
    console.log('isDisabled()');
    return !this.enteredName.trim();
  }
}
