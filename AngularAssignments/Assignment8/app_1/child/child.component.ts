import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output()  eventObj = new EventEmitter();
  public data = 'Message From Child: ';

  sendDataEvent(userData: string) {
    this.data += userData;
    this.eventObj.emit(this.data);
  }
  ngOnInit(): void {

  }


}
