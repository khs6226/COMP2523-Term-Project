export interface IPost {
  id: number;
  date: Date;
  user_id: number;
	comments: IComment[];
  likes: number;
}