import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showText = false;
  clicks = [];
  clickNumber = 0;

  constructor() {
  }

  onButtonClick(){
    this.clicks.push(this.clickNumber);
    this.clickNumber = this.clickNumber+1;
    this.showText = !(this.showText);
  }

  getColor(){
    return this.clickNumber >= 5 ? 'blue' : 'white';
  }

}
