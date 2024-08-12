interface IUser {
  name: string;
  email: string;
}
interface ITask {
  description: string;
  users: IUser[];
}
