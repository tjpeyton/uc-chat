
import { Injectable } from '@angular/core';
import { Chat, Message } from '../Chat';
import { FormatService } from './format.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private chats: Array<Chat> = [];

  constructor(private formatService: FormatService) { }

  public createChat(chatName: string) : Chat {
    const created = this.formatService.dateToString(Date.now());
    const messages : Array<any> = [];
    const newChat : Chat = {
      creationDate: Date.now(),
      creationDateString: created,
      creator: localStorage.getItem('email'),
      name: chatName,
      messages: messages
    }
    this.chats.unshift(newChat);
    return newChat;
  }

  public sendMessage(chatName: string, text: string) : Message {
    const created = this.formatService.dateToString(Date.now());
    var owner: string;
    var ownerCheck = localStorage.getItem('email');
    if(typeof ownerCheck == 'string') owner = ownerCheck;
    else owner = "null";
    const newMessage : Message = {
      creationDate: Date.now(),
      creationDateString: created,
      text: text,
      owner: owner
    }
    const chatTarget : number = this.chats.findIndex((chat) => chat.name == chatName);
    this.chats[chatTarget].messages.push(newMessage);
    return newMessage;
  }

  public getChatsByDate() : Array<Chat> {
    return this.chats.sort((x, y) => {
      return x.creationDate - y.creationDate;
    })
  }

}
