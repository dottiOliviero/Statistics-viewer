import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ListaFile } from 'src/app/object-model/general-om';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {
  @Input() data: ListaFile;

  @Output() cancellaElemen = new EventEmitter<string>();

  @Output() selected = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public controlla(event, name) {
    this.selected.emit(event);
  }

  public eliminateElement(event) {
    this.cancellaElemen.emit(event);
  }

}
