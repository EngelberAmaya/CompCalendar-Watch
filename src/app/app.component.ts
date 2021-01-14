import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pruebaTecInnova';
  selected: Date;
  _start: boolean=false;

  start(){
    this._start=true;
  }
  clear(){
    this._start=false;
  }
  
}
