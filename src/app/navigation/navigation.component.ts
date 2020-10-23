import { Component, OnInit } from '@angular/core';

export interface LinkType {
  linkPath: string,
  text: string,
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  links: LinkType[] = [
    {text: 'Home',   linkPath: '/home'},
    {text: 'Chat',   linkPath: '/chat-room'},
    {text: 'Manage', linkPath: '/manage'},
    {text: 'Help',   linkPath: '/about'},
    {text: 'Help',   linkPath: '/search'},
  ];

  constructor() { }

  clickMe(): void {
    console.log("click")
  }

  ngOnInit(): void {
  }

}
