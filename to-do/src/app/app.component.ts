import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
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

  users = DUMMY_USERS;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selecetedUserId);
  }

  onSelectUser(id: string) {
    this.selecetedUserId = id;
  }
  
}

