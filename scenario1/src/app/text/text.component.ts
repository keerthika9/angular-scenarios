import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

  public name:string;
  public place:string;
  public myid: "testid"

  onclick() {
    console.log('hi');
  }


  constructor() { }
   
  

  
  ngOnInit() {
    this.name = "Rakesh";
    this.name = "rakhi";
    this.place = "bangalore";
  }

}
