import { User } from "./user.model";


export interface Message {
  id: string;
  title: string;
  text: string;
  createdAt: Date;
  updatedAt: Date;
  user: User;
}
