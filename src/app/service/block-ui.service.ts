import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlockUiService {
  private block = false;

  constructor() { }

  public changeState(bool) {
    this.block = bool;
  }

}
