export interface MultiTask {
  id: string;
  userName: string | undefined;
  taskName: string;
  status: 'todo' | 'completed' | 'canceled' | string;
}

export interface NewMultiTaskData {
  userName: string | undefined;
  taskName: string;
}

// export interface MultiTask {
//   id: string;
//   userName: [
//     string | undefined
//   ];
//   taskName: string;
//   status: 'todo' | 'completed' | 'canceled' | string;
// }

// export interface NewMultiTaskData {
//    userName: [
//     string | undefined,
//   ];
//   taskName: string;
// }