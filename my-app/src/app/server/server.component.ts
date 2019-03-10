import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  // styleUrls: ['./server.component.css']
  styles: [`
    h3 {
      color: brown;
    }
  `]
})
export class ServerComponent implements OnInit {
  serverNumber;
  serverStatus;

  constructor() {
    this.serverNumber = (Math.random() * 10).toFixed(0);
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit() {
  }

}
