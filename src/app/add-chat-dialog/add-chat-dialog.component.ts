import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-add-chat-dialog',
  templateUrl: './add-chat-dialog.component.html',
  styleUrls: ['./add-chat-dialog.component.css']
})
export class AddChatDialogComponent implements OnInit {

  public form: FormGroup;

  constructor(protected dialogRef: NbDialogRef<any>,
              private chatService: ChatService,
              private fb: FormBuilder) 
              {
                this.form = this.fb.group({
                  chatName: new FormControl('', [Validators.required, Validators.maxLength(20)])
                })
              }


  ngOnInit(): void {
  }

  get chatName() {
    return this.form.get('chatName');
  }

  public submit() {
    const chatName = this.form.value.chatName;
    let newChat = this.chatService.createChat(chatName);
    this.dialogRef.close(newChat);
  }

  public clear() {
    this.dialogRef.close();
  }

}
