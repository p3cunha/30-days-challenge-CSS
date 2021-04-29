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
    { title: 'Animated loader', href: '/icon-layers'},
    { title: 'Divs change color', href: '/icon-layers'},
    { title: 'Button effect', href: '/icon-layers'},
    { title: 'Pulse effect', href: '/icon-layers'},
  ];

}
