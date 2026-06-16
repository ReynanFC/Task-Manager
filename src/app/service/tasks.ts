import { effect, Service, signal } from '@angular/core';
import { NewTaskData, type TaskItem } from '../models/task-item';

@Service()
export class Tasks {
  private tasks = signal<TaskItem[]>(this.loadingTasks());

  constructor() {
    effect(() => this.saveTasks());
  }

  getUserTasks(userId: string): TaskItem[] {
    return this.tasks().filter((task) => task.userId === userId);
  }

  addTask(taskData: NewTaskData, userId: string) : void {
    this.tasks.update((oldTask) => {
      const newTask: TaskItem = {
        id: new Date().getTime().toString(),
        userId: userId,
        title: taskData.title,
        summary: taskData.summary,
        time: taskData.date,
      };

      return [...oldTask, newTask];
    });
  }

  removeTask(id: string) : void{
    this.tasks.update((tasks) => tasks.filter((task) => task.id !== id));
  }

  private saveTasks() : void {
    localStorage.setItem('tasks', JSON.stringify(this.tasks()));
  }

  loadingTasks() : TaskItem[] {
    const tasksJson = localStorage.getItem('tasks');
    return tasksJson ? (JSON.parse(tasksJson) as TaskItem[]) : [];
  }
}
