import { Component, input, computed, output, Output, EventEmitter } from "@angular/core";

type User = {
  id: string
  name: string
  avatar: string
}

@Component({
  selector: "app-user",
  standalone: true,
  imports: [],
  templateUrl: "./user.component.html",
  styleUrl: "./user.component.css",
})
export class UserComponent {
  user = input.required<User>();
  avatarImagePath = computed(() => `/assets/users/${this.user().avatar}`);

  selectUser = output<string>();

  onSelectUser() {
    this.selectUser.emit(this.user().avatar);
  }
}
