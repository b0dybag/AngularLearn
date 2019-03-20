import {Component, OnInit, Input, Output, EventEmitter, OnDestroy} from '@angular/core';

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
export class ServerComponent implements OnInit, OnDestroy {
  @Input() serverInfo: {count: number, status: string};
  @Output() serverDeleting = new EventEmitter<{count: number}>();

  constructor() {
  }

  onDeleteServer() {
    this.serverDeleting.emit({count: this.serverInfo.count});
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log('server number ' + this.serverInfo.count + ' has been destroyed!');
  }

}
