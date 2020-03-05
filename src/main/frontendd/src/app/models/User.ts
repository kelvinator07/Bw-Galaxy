import { Task } from './Task';

export class User {

  public id: number;
  public password: string;
  public firstName: string;
  public lastName: string;
  public email: string;
  public createdAt: Date;
  private tasksList: Task[];

}
