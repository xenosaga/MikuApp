import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {

  rooms = [
    {value: 'fjdjahlfehae46486ew4', viewValue: 'Barbylon'},
    {value: 'requrojg5regr59rq56r', viewValue: 'Moe pet'},
  ];

  public msgs: Array<any> = new Array<any>();

  constructor(private messageService: MessageService) { }

  getMessages() {
    this.messageService.getMessages().subscribe(
      (response: any) => {
        this.msgs = response;
        console.log(this.msgs); //log接到的資料
      },
      (error: HttpErrorResponse) => this.messageService.HandleError(error)
    );
  }

  getUser(id) {
    console.log(id);
  }

  clickMe() : void {
    console.log('click')
  }

  ngOnInit(): void {
    this.getMessages();
  }

}
