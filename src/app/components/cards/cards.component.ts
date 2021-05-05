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
    { title: 'Divs change color', href: '/color-change'},
    { title: 'Button effect', href: '/animated-button'},
    { title: 'Pulse effect', href: '#'},
  ];

}
