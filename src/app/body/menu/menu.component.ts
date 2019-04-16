import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public projects: MenuItem[]=[];
  constructor() { }

  ngOnInit() {
  this.projects =
  [{  label: 'Home', icon: 'pi pi-fw pi-home', routerLink:['/app/home'], expanded:true},
  {
            label: 'Cleveland',
            items: [
                {label: 'Scada', icon: 'pi pi-fw pi-cog', routerLink:['/app/scada']},
            ]
        },
        {
            label: 'China',
            items: [
                {label: 'Multi', icon: 'pi pi-fw pi-cog', routerLink:['/app/workInProgress']},
            ]
        }];
  }

}
