import { Component, OnInit, Input} from '@angular/core';

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
  @Input() serverInfo: {count: number, status: string};

  constructor() {
    this.serverNumber = (Math.random() * 10).toFixed(0);
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit() {
  }

}
