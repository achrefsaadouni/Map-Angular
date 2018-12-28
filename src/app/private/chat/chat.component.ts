import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers:[
    ChatService
  ]
})
export class ChatComponent implements OnInit {

  user:string;
  room:string;
  messageText:string;
  messageArray:Array<{user:String,message:String}>=[];

  constructor(private chat: ChatService){
    this.chat.newUserJoined().subscribe(data=>this.messageArray.push(data));
    this.chat.userLeftRoom().subscribe(data=>this.messageArray.push(data));
    this.chat.newMessageReceived().subscribe(data=>this.messageArray.push(data));
  }

  ngOnInit() {
    /*this.chat.messages.subscribe(msg => {
      console.log(msg);
    });*/
  }

  sendMessage() {
    this.chat.sendMessage({user:this.user,room:this.room,message:this.messageText});

  }

  join()
  {
    this.chat.joinRoom({user:this.user,room:this.room});
  }

  leave()
  {
    this.chat.leaveRoom({user:this.user,room:this.room});
  }

}
