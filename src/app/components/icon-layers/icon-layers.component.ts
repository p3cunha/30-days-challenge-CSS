import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-layers',
  templateUrl: './icon-layers.component.html',
  styleUrls: ['./icon-layers.component.scss']
})
export class IconLayersComponent {

  constructor() { }

  facebook() {
    window.open('https://www.facebook.com/', '_blank');
  }

  twitter() {
    window.open('https://www.twitter.com/', '_blank');
  }

  linkedin() {
    window.open('https://www.linkedin.com/in/p3cunha/', '_blank');
  }

  instagram() {
    window.open('https://www.instagram.com/pcl.s/', '_blank');
  }

  googlePlus() {
    window.open('https://myaccount.google.com/', '_blank');
  }

  gitHub() {
    window.open('https://github.com/p3cunha', '_blank');
  }
}
