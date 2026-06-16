export interface TaskItem {
  id: string;
  userId: string;
  title: string;
  time: string;
  summary?: string;
}

export interface NewTaskData {
  title: string,
  summary?: string,
  date: string;
}
