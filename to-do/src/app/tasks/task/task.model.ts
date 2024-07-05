export interface Task {
  id: string;
  name: string;
  status: 'todo' | 'completed' | 'canceled'
}

export interface NewTaskData {
  id: string;
  name: string;
  status: 'todo' | 'completed' | 'canceled'
}