import { Component, OnInit, Input } from '@angular/core';
import { ListaFile } from 'src/app/object-model/general-om';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {
  @Input() data: ListaFile;

  constructor() { }

  ngOnInit() {
  }

  public controlla(event) {
  }

}
