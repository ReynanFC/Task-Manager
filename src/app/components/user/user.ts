import { Component, computed, input, output } from '@angular/core';
import { DummyUser } from '../../models/dummy-users';
import { Card } from '../../shared/card/card';

@Component({
  selector: 'app-user',
  imports: [Card],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {
  user = input.required<DummyUser>();
  protected readonly imagePath = computed(() => `users/${this.user().avatar}`);

  readonly selected = input.required<boolean>();

  select = output<string>();

  onSelectUser(): void {
    this.select.emit(this.user().id);
  }
}
