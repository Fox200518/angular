import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class AppComponent {
  serverElements = [{type: "server", name:"TestServer", content:"Just a Test!"}];

  onServerAdded(serverData : {serverName : string, serverContent : string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBluePrintAdded(serverData : {serverName : string, serverContent : string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onChangeFirst(){
    this.serverElements[0].name = "Changed Name!";
  }

}
