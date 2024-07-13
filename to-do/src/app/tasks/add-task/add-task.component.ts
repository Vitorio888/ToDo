import { Component, inject, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TasksService } from '../tasks.service';


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

  @Input({required: true}) userId!: string;

  private tasksService = inject(TasksService);

  onSubmit() {
    // console.log(this.form);
    const enteredName = this.form.value.enteredName;
    const nameWithoutQuotes = JSON.stringify(enteredName);
    this.tasksService.addTask(
      {
        name: JSON.parse(nameWithoutQuotes).trim(),
      },
      this.userId
    );
    this.form.reset();
    // console.log(enteredName);
  }

  isDisabled() {
    // return !this.enteredName.trim();
    return !this.form.value.enteredName?.trim();
  }
}
