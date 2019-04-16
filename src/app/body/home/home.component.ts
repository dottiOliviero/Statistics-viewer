import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private source;

  constructor() { }

  ngOnInit() {
  }

  public onLoadFunction(frame) {
	  this.source = frame.contentWindow;
	  console.log(this.source);
  }

}
