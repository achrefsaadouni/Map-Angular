import {Component, Input, OnInit, Output} from '@angular/core';
import { ChatService } from './chat.service';
import {AddMessageService} from './add-message.service';
import {MessageChat} from '../Models/MessageChat';



@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers:[
    ChatService,
    AddMessageService
  ]
})
export class ChatComponent implements OnInit {

  @Input()
  room:string;

  @Output()
  user:string;
  messageText:string;
  messageArray:Array<{user:String,message:String}>=[];
  userArray:any;
  userId:number;
  usertab:any;
  userIdS:String;
  nowDate:Date;
  messageObject:MessageChat= new MessageChat();
  allMessage:MessageChat[];
  numberUser:number;

  constructor(private chat: ChatService,private msg:AddMessageService){
    this.user=localStorage.getItem('firstName');
    this.userId=+localStorage.getItem('id');
    this.userIdS=localStorage.getItem('firstName');
    this.chat.newUserJoined().subscribe(data=>this.messageArray.push(data));
    // this.chat.newUserJoined().subscribe(data=>this.userArray.push(data));
    this.chat.UserConnected().subscribe(data=>{  console.log(data);
    this.userArray=data;

    }

    );
    this.chat.userLeftRoom().subscribe(data=>this.messageArray.push(data));
    this.chat.newMessageReceived().subscribe(data=>this.messageArray.push(data));
  }

  ngOnInit() {
    this.msg.getallMessage(this.room).subscribe(
      data => {
        this.allMessage= data;
       /* console.log(
          this.allMessage
        ) ;*/
      }
    );
    this.join();



  }

  sendMessage() {

    this.chat.sendMessage({user:this.user,room:this.room,message:this.messageText});
    this.messageObject.content=this.messageText;
    this.messageObject.senderID=this.userId;
    this.messageObject.discussionID=+this.room;
    this.messageObject.seen=0;
    this.messageObject.date=new Date();
    this.msg.addMesasage(this.messageObject).subscribe();
    this.nowDate = new Date();
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
