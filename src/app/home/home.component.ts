import { Component, OnInit } from '@angular/core';

export interface Tile {
  cardTitle: string,
  cardIcon: string,
  color: string,
  cols: number,
  rows: number,
  routerLink: string,
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tiles: Tile[] = [
    {cardTitle: 'Home', routerLink: '/home',   cardIcon:'home',    cols: 1, rows: 1, color: 'loghtblue'},
    {cardTitle: 'Chat', routerLink: '/chat',   cardIcon:'chat',    cols: 1, rows: 1, color: 'loghtblue'},
    {cardTitle: 'Manage', routerLink: '/manage', cardIcon:'settings', cols: 1, rows: 1, color: 'loghtblue'},
    {cardTitle: 'Help', routerLink: '/about',   cardIcon:'help',   cols: 1, rows: 1, color: 'loghtblue'},

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
