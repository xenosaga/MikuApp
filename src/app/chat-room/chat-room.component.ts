import { Component, OnInit, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  msgs = [
    {
      user: "name",
      msg: "message"
    }
  ];

  counter = Array;

  constructor(private ngZone: NgZone, private http: HttpClient) { }

  getList(): void {
    let body = {
      "start_time": 150000,
      "end_time": 10000,
      "rank": "time"
    };

    let url = "http://127.0.0.1:5000/api/v1/message";

    let opeion = {
      observe: 'respnose' as 'response'
    };

    this.http.post<any>(url, body).subscribe( res=> {
      for(var r in res)
      {
        console.log(res[0])
      }
      console.log(this.msgs)
    })

    console.log("list")
  }

  clickMe() : void {
    console.log('click')
  }

  ngOnInit(): void {
  }

  numberReturn(length){
    return new Array(length);
  }

}
