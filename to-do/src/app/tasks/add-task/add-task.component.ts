import { Component, EventEmitter, Output } from '@angular/core';
import { type NewTaskData } from '../task/task.model';
import { v4 as uuidv4} from 'uuid';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  form = new FormGroup({
    enteredName: new FormControl('',
      {
        validators: [Validators.required]
      }
  ),
  });
  @Output() add = new EventEmitter<NewTaskData>();

  onSubmit() {
    console.log(this.form);
    const newTaskId = uuidv4();
    const enteredName = this.form.value.enteredName;
    const nameWithoutQuotes = JSON.stringify(enteredName);
    const status = 'todo'
    this.add.emit({
      id: newTaskId,
      name: JSON.parse(nameWithoutQuotes).trim(),
      status: status
    });
    this.form.value.enteredName = '';
    console.log(enteredName);
    
    // console.log('Adding task: ID =', newTaskId, ', Name =', this.enteredName.trim() , ', Status =', status);
  }

  isDisabled() {
    // console.log('isDisabled()');
    // return !this.enteredName.trim();
    return !this.form.value.enteredName?.trim();
  }
}
