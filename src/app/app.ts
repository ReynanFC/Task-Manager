import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { User } from './components/user/user';
import { DummyUser } from './models/dummy-users';
import { Tasks } from './components/tasks/tasks';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly users: DummyUser[] = [
    {
      id: 'u1',
      name: 'Jasmine Washington',
      avatar: 'user-1.jpg',
    },
    {
      id: 'u2',
      name: 'Emily Thompson',
      avatar: 'user-2.jpg',
    },
    {
      id: 'u3',
      name: 'Marcus Johnson',
      avatar: 'user-3.jpg',
    },
    {
      id: 'u4',
      name: 'David Miller',
      avatar: 'user-4.jpg',
    },
    {
      id: 'u5',
      name: 'Priya Patel',
      avatar: 'user-5.jpg',
    },
    {
      id: 'u6',
      name: 'Arjun Singh',
      avatar: 'user-6.jpg',
    },
  ];

  protected readonly selectedUser = signal<DummyUser | null>(null);

  onSelectUser(userId: string): void {
    const user = this.users.find((u) => u.id === userId) || null;

    this.selectedUser.set(user);
  }
}
