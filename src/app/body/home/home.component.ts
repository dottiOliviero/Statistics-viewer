import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

type AOA = any[][];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private source;

  private pieData: any;
  private barData: any;
  private visualizzaStat = false;

  public spreadData: any;

  constructor() { }

  ngOnInit() {
  }

 public loadFiles() {
  // vado a vedere quali file sono selezionati nella lista di quelli caricati e ne elaboro uno alla volta.
  // per ora lavoro uno per volta 
  const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, {type: 'binary'});

      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      this.spreadData = <AOA>(XLSX.utils.sheet_to_json(ws, {header: 1}));
    };
 }

  public generaGrafici() {
    this.visualizzaStat = true;
    this.pieData =  {
      labels: ['A','B','C'],
      datasets: [
          {
              data: [300, 50, 100],
              backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ]
          }]
      };

      this.barData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: '#42A5F5',
                borderColor: '#1E88E5',
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: 'My Second dataset',
                backgroundColor: '#9CCC65',
                borderColor: '#7CB342',
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    };
  }

  public pulisciGrafici() {
    this.visualizzaStat = false;
    this.barData = [];
    this.pieData = [];
  }

  public generaPDF() {

  }

}
