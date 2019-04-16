import { Component, OnInit } from '@angular/core';
import { Costanti } from '../../utils/Costanti';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-scada',
  templateUrl: './scada.component.html',
  styleUrls: ['./scada.component.css']
})
export class ScadaComponent implements OnInit {
  public altezza;
  public larghezza;
  public url;
  public trustedUrl;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  this.altezza = Costanti.altezzaPannello;
  this.larghezza = Costanti.larghezzaPannello;
  this.url = "http://localhost:8000/FST_SCADA.html";
  this.trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}
