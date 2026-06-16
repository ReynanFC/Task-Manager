import { Component, computed, inject, input, signal } from '@angular/core';
import { Task } from './task/task';
import { Tasks as TasksService } from '../../service/tasks';
import { NewTaskData } from '../../models/task-item';
import { NewTask } from './new-task/new-task';

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss',
})
export class Tasks {
  readonly userName = input<string>();
  readonly userId = input.required<string>();
  protected readonly isAddingTask = signal<boolean>(false);
  private readonly taskService = inject(TasksService);

  protected readonly selectedUserTasks = computed(() =>
    this.taskService.getUserTasks(this.userId()),
  );

  protected onCompleteTask(taskId: string) {
    this.taskService.removeTask(taskId);
  }

  protected openNewTaskForm() {
    this.isAddingTask.set(true);
  }

  protected onCloseAddTask() {
    this.isAddingTask.set(false);
  }
}
