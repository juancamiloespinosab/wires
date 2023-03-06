import { IMessageComment } from "./message-comment.interface";


export interface IMessage {
  title: string;
  text: string;
  createdAt: Date;
  username: string;
  comments: IMessageComment[]
}
