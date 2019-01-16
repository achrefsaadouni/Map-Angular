import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  roomM:string;
  affichageDiscussion:number;

  constructor() { }

  ngOnInit() {
    this.affichageDiscussion=0;
  }

  afficher()
  {
    this.affichageDiscussion=1;
  }
}
