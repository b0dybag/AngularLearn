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
  staticServersList = [];

  onDisplayDetails() {
    this.hiddenDetails = !this.hiddenDetails;
    // console.log(this.hiddenDetails);
  }

  addTheServer() {
    this.serversList.push(this.serversList.length + 1);
    // console.log(this.serversList);
  }

  addTheStaticServer() {
    const serversCount =  this.staticServersList.length + 1;
    const serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    this.staticServersList.push({count: serversCount, status: serverStatus});
    console.log(this.staticServersList);
  }
}
