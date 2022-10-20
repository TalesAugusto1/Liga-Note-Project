import { CommentInterface } from './comment.interface';

export interface CardInterface {
  id: number;
  title: string;
  body: string;
  color: string;
  likeIconName: string;
  isReadingMore: boolean;
  comments: CommentInterface[];
  isPublic: boolean;
  lIke: boolean;
}
