import { Component, inject, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MultiTasksService } from '../multitasks/multitasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent implements OnInit {

  form!: FormGroup;

  constructor(private fb: FormBuilder, private tasksService: MultiTasksService) {}

  // @Input({required: true}) userId!: string;

  ngOnInit() {
    this.form = this.fb.group({
      taskName: '',
      users: this.fb.array([])
    });
  }

  get users() {
    return this.form.get('users') as FormArray;
  }

  // addUser() {
  //   const userGroup = this.fb.group({
  //     userName: ['', Validators.required]
  //   });
  //   this.users.push(userGroup);
  // }

  addUser() {
    this.users.push(this.fb.group({
      userName: ''
    }));
  }

  onSubmit() {
    if (this.form.valid) {
      // Обработка отправки формы
      console.log(this.form.value);

      const taskName = this.form.value.taskName;
      const userArray = this.form.value.users[0];

      const taskNameWithoutQuotes = JSON.stringify(taskName);
      let userNameWithoutQuotes = JSON.stringify(userArray);

      this.tasksService.addMultiTask(
        {
          // userName: JSON.parse(userNameWithoutQuotes).trim(),
          userName: userNameWithoutQuotes,
          taskName: JSON.parse(taskNameWithoutQuotes).trim(),
        },
      );

    }
  }

  // onSubmit() {
  //   const enteredName = this.form.value.enteredName;
  //   const nameWithoutQuotes = JSON.stringify(enteredName);
  //   this.tasksService.addTask(
  //     {
  //       name: JSON.parse(nameWithoutQuotes).trim(),
  //     },
  //     this.userId
  //   );
  // }

  // form = new FormGroup({
  //   enteredName: new FormControl('', {
  //       validators: [Validators.required]
  //     }),
  //     users: new FormArray<FormGroup>([]),
  // });


  // private tasksService = inject(TasksService);


  // public onAddUser() {
  //   const userForm = new FormGroup({
  //     name: new FormControl<string | null>(null),
  //   });
  //   this.form.controls.users.push(userForm);
  // }

}
