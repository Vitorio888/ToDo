import { Component, inject, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MultiTasksService } from '../multitasks/multitasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})

export class NewTaskComponent {

  private multiTasksService = inject(MultiTasksService);

  form = new FormGroup({
    taskName: new FormControl('', {
      validators: [Validators.required],
    }),
    users: new FormArray<FormGroup>([]),
  });

    // Helper method to get the 'items' FormArray
  get users() {
    return this.form.get('users') as FormArray;
  }

  onAddUser() {
    const userForm = new FormGroup({
      userName: new FormControl<string | null>(null, {
        validators: [Validators.required],
      }),
    });
    this.form.controls.users.push(userForm);
  }

  onSubmit() {
    if (this.form.valid) {
      // Обработка отправки формы
      console.log(this.form.value);

      const taskName = this.form.value.taskName;
      const userArray = this.form.value.users;

      const taskNameWithoutQuotes = JSON.stringify(taskName);
      const userNameWithoutQuotes = JSON.stringify(userArray);

      this.multiTasksService.addMultiTask(
        {
          taskName: JSON.parse(taskNameWithoutQuotes),
          userName: userNameWithoutQuotes
        },
      );

    }
  }
}



//////////////////////////////////////////////////////////////
// export class NewTaskComponent implements OnInit {

//   form!: FormGroup;

//   constructor(private fb: FormBuilder, private tasksService: MultiTasksService) {}

//   ngOnInit(): void {
//     this.form = this.fb.group({
//       taskName: new FormControl('', {
//         validators: [Validators.required]
//       }),
//       users: new FormArray<FormGroup>([], {
//         validators: [Validators.required]
//       }),
//       // users: this.fb.array([]) // Initialize an empty FormArray
//     });
//   }

//   // Helper method to get the 'items' FormArray
//   get users() {
//     return this.form.get('users') as FormArray;
//   }

//   // ngOnInit(): void {
//   //   this.myForm = this.fb.group({
//   //     items: this.fb.array([
//   //       this.fb.group({
//   //         name: ['', Validators.required],
//   //         quantity: [1, [Validators.required, Validators.min(1)]],
//   //         subItems: this.fb.array([]) 
//   //       })
//   //     ])
//   //   });
//   // }

//   // Other form-related methods will go here

//   // addUser() {
//   //   const userGroup = this.fb.group({
//   //     userName: ['', Validators.required]
//   //   });
//   //   this.users.push(userGroup);
//   // }

//   onAddUser() {
//     const user = this.fb.group({
//       // Define your form controls here
//       userName: ['', Validators.required],
//       // Add more form controls as needed
//     });

//     // Add the new form group to the FormArray
//     this.users.push(user);

//     // 
//     // this.users.push(this.fb.group({
//     //   userName: ''
//     // }));
//   }


//   onSubmit() {
//     if (this.form.valid) {
//       // Обработка отправки формы
//       console.log(this.form.value);

//       const taskName = this.form.value.taskName;
//       const userArray = this.form.value.users;

//       const taskNameWithoutQuotes = JSON.stringify(taskName);
//       let userNameWithoutQuotes = JSON.stringify(userArray);

//       this.tasksService.addMultiTask(
//         {
//           userName: userNameWithoutQuotes,
//           taskName: JSON.parse(taskNameWithoutQuotes).trim(),
//         },
//       );

//     }
//   }
// }

