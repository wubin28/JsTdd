import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-banner',
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.css']
})
export class BannerComponent {

  title = 'croeso pawb!';
  uppercase = false;
  
  clickTitle() {
    this.uppercase = !this.uppercase;
    if (this.uppercase) 
      this.title = this.title.toUpperCase();
    else
      this.title = this.title.toLowerCase();
  }
}
