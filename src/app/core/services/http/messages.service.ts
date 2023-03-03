import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Message } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  private BASE_URL = environment.nestApi.baseUrl;
  private MESSAGES_API = environment.nestApi.paths.messages;

  constructor(private httpClient: HttpClient) {}

  createMessage(message: Partial<Message>) {
    const url = `${this.BASE_URL}${this.MESSAGES_API.parent}`;
    return this.httpClient.post<Message>(url, message);
  }

  getAllMessages() {
    const url = `${this.BASE_URL}${this.MESSAGES_API.parent}`;
    return this.httpClient.get<Message[]>(url);
  }

  getOwnerMessages() {
    const url = `${this.BASE_URL}${this.MESSAGES_API.parent}${this.MESSAGES_API.children.me}`;
    return this.httpClient.get<Message[]>(url);
  }
}
