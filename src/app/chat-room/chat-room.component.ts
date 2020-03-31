import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
