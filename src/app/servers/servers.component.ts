import { Component, OnInit } from '@angular/core';
import { timeout } from 'q';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer=false;
  serverCreationStatus="No server was created!";
  serverName="TestServer";
  serverCreated=false;
  servers=['Staging Server', 'Live Server']

  constructor() { 
    setTimeout(
      () => { this.allowNewServer=true; }
      ,2000);
  }

  ngOnInit() {
  }

  onCreatedServer(){
    this.serverCreated=true;
    this.servers.push(this.serverName);
    this.serverCreationStatus="Server was created! Name is "+ this.serverName;
  }

  onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName=(<HTMLInputElement>event.target).value;
  }
}
