import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tag1',
  templateUrl: './tag1.component.html',
  styleUrls: ['./tag1.component.css']
})
export class Tag1Component implements OnInit {
@Input() public parentData ;
  constructor() { }

  ngOnInit() {
  }

}
