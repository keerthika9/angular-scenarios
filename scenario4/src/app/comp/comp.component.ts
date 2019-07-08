import { Component, OnInit, Output ,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.css']
})
export class CompComponent implements OnInit {
  @Output() public child = new EventEmitter() ;

  constructor() { }

  ngOnInit() {
  }
  event(){
    this.child.emit("keerthika");
  }

}
