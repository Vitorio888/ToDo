import { Component, Input } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import { DATA_MULTI_TASK } from './data-multi-tasks';
// import { RouterOutlet } from '@angular/router';

class AppModule {}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'to-do';
  selecetedUserId?: string;

  @Input({required: true}) userId!: string;

  users = DUMMY_USERS;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selecetedUserId);
  }

  onSelectUser(id: string) {
    this.selecetedUserId = id;
  }
}

