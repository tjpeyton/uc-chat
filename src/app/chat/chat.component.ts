import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, of, startWith } from 'rxjs';

import { AddChatDialogComponent } from '../add-chat-dialog/add-chat-dialog.component';
import { Chat } from '../Chat';

import { NbDialogService } from '@nebular/theme';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  public chats: Chat[];
  public filteredChats$: Observable<Chat[]>;
  public input: FormControl;
  public selectedChat: any;
  public messages: any;
  public userEmail: any;
  public chatInfo: any;

  constructor(private chatService: ChatService,
              private dialogService: NbDialogService
              ) {
                  this.chats = this.chatService.getChatsByDate();
                  this.filteredChats$ = of(this.chats);
                  this.input = new FormControl();
                  this.userEmail = localStorage.getItem('email');
                }

  ngOnInit(): void {
    this.filteredChats$ = this.input.valueChanges
      .pipe(
        startWith(''),
        map(filterString => this.filter(filterString)),
      );
  }

  public openAddChatModal() : void {
    this.dialogService.open(AddChatDialogComponent)
      .onClose.subscribe(
         chat => {
          if(chat){
            this.chatSelected(chat);
          }
          this.input.setValue("");
        }
      )
  }

  private filter(value: string) : Chat[] {
    const filterValue = value.toLowerCase();
    return this.chats.filter(chat => chat.name.toLowerCase().includes(filterValue));
  }

  public chatSelected(chat: Chat) : void {
    this.selectedChat = chat;
    this.messages = chat.messages;
    this.chatInfo = "Created by: " + chat.creator;
  }

  public isSelected(chat: Chat) : boolean {
    return this.selectedChat === chat;
  }

  public sendMessage(msg: any) : void {
    console.log(this.chatService.sendMessage(this.selectedChat.name, msg));
  }
}
