import { Component, inject, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MultiTasksService } from '../multitasks/multitasks.service';

@Component({
  selector: 'app-reactive-new-task',
  templateUrl: './reactive-new-task.component.html',
  styleUrl: './reactive-new-task.component.css'
})

export class ReactiveNewTaskComponent {

  // contact our service
  private multiTasksService = inject(MultiTasksService);

  // create form with group.
  form = new FormGroup({
    // One is just control.
    taskName: new FormControl('', {
      validators: [Validators.required],
    }),
    // Other is Array.
    users: new FormArray<FormGroup>([]),
  });

  // Helper method to get the 'items' (users) FormArray
  get users() {
    return this.form.get('users') as FormArray;
  }

  // Method for new item in our array. When we click button 'Add User'.
  onAddUser() {
    const userForm = new FormGroup({
      userName: new FormControl<string | null>(null, {
        validators: [Validators.required],
      }),
    });
    this.form.controls.users.push(userForm);
  }

  // Method for sending data from a form to the server (LocalStorage)
  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      // console.log(this.form);
      
      const taskName = this.form.value.taskName;
      const userArray = this.form.value.users;

      const taskNameWithoutQuotes = JSON.stringify(taskName);
      const userNameWithoutQuotes = JSON.stringify(userArray);

      // contact our service
      this.multiTasksService.addMultiTask(
        {
          taskName: JSON.parse(taskNameWithoutQuotes),
          userName: userNameWithoutQuotes
        },
      );
      this.form.reset();
    }
  }
}

