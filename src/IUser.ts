export interface IUser {
  id: number;
  username: string;
  password: string;
  first_name: string;
  last_name: string;
  email: string;
  comments: IComment[];
  follow: Ifollower[];	
}