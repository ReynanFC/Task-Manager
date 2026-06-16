import { Component, input, output } from '@angular/core';
import { TaskItem } from '../../../models/task-item';
import { Card } from '../../../shared/card/card';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.scss',
})
export class Task {
  readonly taskItem = input.required<TaskItem>();
  readonly complete = output<string>();

  onCompleteTask() {
    this.complete.emit(this.taskItem().id);
  }
}
