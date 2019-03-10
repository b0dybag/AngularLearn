import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  name = 'my-app';
  hiddenDetails = true;
  serversList = [];

  onDisplayDetails() {
    this.hiddenDetails = !this.hiddenDetails;
    // console.log(this.hiddenDetails);
  }

  addTheServer() {
    this.serversList.push(this.serversList.length + 1);
    // console.log(this.serversList);
  }
}
