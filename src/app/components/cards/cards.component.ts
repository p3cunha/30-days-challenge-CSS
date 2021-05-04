import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public cards = [
    { title: 'Icons in layers', href: '/icon-layers'},
    { title: 'Animated loader', href: '/animated-loader'},
    { title: 'Divs change color', href: '#'},
    { title: 'Button effect', href: '#'},
    { title: 'Pulse effect', href: '#'},
  ];

}
