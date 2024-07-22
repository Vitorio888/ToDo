export interface MultiTask {
  id: string;
  userName: string;
  taskName: string;
  status: 'todo' | 'completed' | 'canceled' | string;
}

export interface NewMultiTaskData {
  userName: string;
  taskName: string;
}