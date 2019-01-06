import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
public inputStringLength;

getInputStringLength(event: any) {
  this.inputStringLength = (<HTMLInputElement>event.target).value.length;
}

}
