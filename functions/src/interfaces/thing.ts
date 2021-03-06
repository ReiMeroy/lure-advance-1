import { firestore } from 'firebase';
import { User } from './user';
export interface Thing {
  id: string;
  designerId: string;
  title: string;
  description: string;
  tags: string[];
  imageUrls: string[];
  commentCount: number;
  likeCount: number;
  viewCount: number;
  createdAt: firestore.Timestamp;
  updateAt: firestore.Timestamp;
}

export interface ThingWithUser extends Thing {
  user: User;
}
