import { IUser } from './IUser';
import { IComment } from './IComment';
import { IPost } from './IPost';
import { IFollower } from './IFollower';

interface IMockDatabase {
	user: IUser[
  username: 'twitteruser',
  password: 'Ihatetwitter!123',
  first_name: 'Jane',
  last_name : 'Doe',
  id_number: '192759',
  email: 'JaneDoe@gmail.com',
  post_id: '1',
  comments: IComment[]
  ];

  post: IPost[
					post_id: 1 
					date: '2020-05-07',
    			comments: IComment[
  										{user: 'instagramUser' , date: '2021-03-05' , message: 'You look so good in this photo (not!) :p' };
  										{user: 'facebookUser' , date: '2021-02-15' , message: 'Wow this is such a cool social media platform!' };
  									];	
					likes: number;
  ];
  

  follow: IFollower[
  ];
}