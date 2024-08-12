export interface IUser {
  name: string;
  email: string;
}
export interface ITask {
  description: string;
  users: IUser[];
}
