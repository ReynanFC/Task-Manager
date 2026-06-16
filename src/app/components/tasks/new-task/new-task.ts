import { Component, inject, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../../../models/task-item';
import { Tasks as TasksService } from '../../../service/tasks';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.scss',
})
export class NewTask {
  protected readonly close = output<void>();
  userId = input.required<string>();
  private readonly tasksService = inject(TasksService);

  protected enteredTitle = signal<string>('');
  protected enteredSummary = signal<string>('');
  protected enteredDate = signal<string>('');

  protected onCancel(): void {
    this.close.emit();
  }

  protected onSubmit(): void {
    if (!this.enteredTitle() || !this.enteredDate()) {
      return;
    }

    this.tasksService.addTask({
      title: this.enteredTitle(),
      summary: this.enteredSummary(),
      date: this.enteredDate()
    }, this.userId());

     this.close.emit();
  }
}
