import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-servers',
  //selector: '[app-servers]',
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  /*template: `
  <app-server></app-server>
  <app-server></app-server>`,*/
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverCreationStatus = 'No server was created!';
  serverName = '';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];

  allowNewServer = false;
  constructor() {
    setTimeout(() => {this.allowNewServer = true}, 2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server ' + this.serverName + ' was created!';
    this.servers.push(this.serverName);
    this.serverCreated = true;
  }

  //onUpdateServerName(event: any){
  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
