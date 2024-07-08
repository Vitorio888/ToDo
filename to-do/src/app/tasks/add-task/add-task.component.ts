import { Component, EventEmitter, Output } from '@angular/core';
import { type NewTaskData } from '../task/task.model';
import { v4 as uuidv4} from 'uuid';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Output() add = new EventEmitter<NewTaskData>();
  enteredName = '';

  onSubmit() {
    const newTaskId = uuidv4();
    const status = 'todo'
    this.add.emit({
      id: newTaskId,
      name: this.enteredName.trim(),
      status: status
    });
    this.enteredName = '';
    // console.log('Adding task: ID =', newTaskId, ', Name =', this.enteredName.trim() , ', Status =', status);
  }

  isDisabled() {
    // console.log('isDisabled()');
    return !this.enteredName.trim();
  }
}
