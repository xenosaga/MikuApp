import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards =  [
          { title: 'Home',    img: '../../assets/home.svg' ,    link: '/home',      content: 'Home page',           rows: 1 },
          { title: 'Manage',  img: '../../assets/settings.svg', link: '/manage',    content: 'Manage Miku Data',    rows: 1 },
          { title: 'Chat',    img: '../../assets/chat.svg' ,    link: '/chat-room', content: 'Online chatting',     rows: 1 },
          { title: 'Data',    img: '../../assets/search.svg' ,  link: '/search',    content: 'Query information',   rows: 1 }
        ];

  constructor(private breakpointObserver: BreakpointObserver) {}
}
