import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

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
  @Output() serverDeleting = new EventEmitter<{count: number}>();

  constructor() {
    // console.log(this.serverInfo);
    // setTimeout(() => {
    //   // console.log(this, this.serverInfo)
    //   if (this.serverInfo) {
    //     this.serverNumber = this.serverInfo.count; // (Math.random() * 10).toFixed(0);
    //     this.serverStatus = this.serverInfo.status; // Math.random() > 0.5 ? 'online' : 'offline';
    //   }
    // }, 2000);
    // this.serverNumber = this.serverInfo.count || 0; // (Math.random() * 10).toFixed(0);
    // this.serverStatus = this.serverInfo.status || 'offline'; // Math.random() > 0.5 ? 'online' : 'offline';
  }

  onDeleteServer() {
    this.serverDeleting.emit({count: this.serverInfo.count});
  }

  ngOnInit() {
  }

}
