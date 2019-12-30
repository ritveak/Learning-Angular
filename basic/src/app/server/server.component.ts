import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: []
})
export class ServerComponent implements OnInit {

  serverId = 10;
  serverStatus = 'offline';

  getStatus(){
    return this.serverStatus;
  }

  constructor() { }

  ngOnInit() {
  }

}
