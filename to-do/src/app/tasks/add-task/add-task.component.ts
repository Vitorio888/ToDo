import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';
import { NgClass } from '@angular/common';
import { v4 as uuidv4} from 'uuid';



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
    const newTaskId = uuidv4();
    this.add.emit({
      id: newTaskId,
      name: this.enteredName.trim()
    });
    this.enteredName = '';
    console.log('Adding task: ID =', newTaskId, ', Name =', this.enteredName.trim());
  }

  isDisabled() {
    // console.log('isDisabled()');
    return !this.enteredName.trim();
  }
}
