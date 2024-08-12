import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskDataService } from '../task-data.service';
import { ITask } from '../types';

class TaskUserFormTypedToken {
  name = new FormControl<string | null>(null, Validators.required);
  email = new FormControl<string | null>(null, [
    Validators.required,
    Validators.email,
  ]);
}

@Component({
  selector: 'app-task-add-form',
  standalone: true,
  imports: [],
  templateUrl: './task-add-form.component.html',
  styleUrl: './task-add-form.component.css',
})
export class TaskAddFormComponent {
  public formGroup = new FormGroup({
    description: new FormControl<string | null>(null, [Validators.required]),
    users: new FormArray<FormGroup<TaskUserFormTypedToken>>([]),
  });
  constructor(private taskDataService: TaskDataService) {}
  public onAddUser() {
    this.formGroup.controls.users.push(
      new FormGroup(new TaskUserFormTypedToken())
    );
  }
  onSubmit() {
    if (this.formGroup.valid) {
      console.log('Form is valid');
      console.log(this.formGroup.value);
      this.taskDataService.addTask(this.formGroup.value as ITask);
    } else {
      console.log('Form is invalid');
    }
  }
}
