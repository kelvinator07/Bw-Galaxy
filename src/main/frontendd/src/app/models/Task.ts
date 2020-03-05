import { User } from './User';


export class Task {

  public id?: number;
  public title: string;
  public description: string;
  public userId: number;
  public completed?: boolean;
  public createdAt?: Date;
}
