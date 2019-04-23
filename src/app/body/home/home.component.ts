import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { Event } from '@angular/router';
import { ListaFile, Method } from '../../object-model/general-om';
import { BlockUiService } from 'src/app/service/block-ui.service';

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

  private uploadedFiles: ListaFile[] = [];

  public spreadData: any;

  constructor(private blockuiService: BlockUiService) { }

  ngOnInit() {
  }

  public generaGrafici() {
    this.blockuiService.changeState(true);
//    const fileToProcess = [];
//    for (const elem of this.uploadedFiles) {
//      if (elem.isSelected) {
//        fileToProcess.push(elem);
//      }
//    }
    // estrapolazione dei dati
    this.readSpreadData(this.uploadedFiles);
    //

    // aggiornamento dei dati

  }

  public pulisciGrafici() {
    this.visualizzaStat = false;
    this.barData = [];
    this.pieData = [];
  }

  public generaPDF() {

  }

  public uploadFiles(event) {
    // non del tutto necessario ma rende più chiaro
    for (let file of event.files) {
      let tempfile = new ListaFile();
      tempfile.name = file.name;
      tempfile.lastModifiedDate = file.lastModifiedDate;
      tempfile.size = file.size;
      tempfile.isSelected = false;
      tempfile.fileItem = file;
      this.uploadedFiles.push(tempfile);
    }
    console.log('uploadFiles: ', this.uploadedFiles);
  }

  public readSpreadData(files: any[]) {
    let element = files[0].fileItem;

//    for (const element of files) {
       // vado a vedere quali file sono selezionati nella lista di quelli caricati e ne elaboro uno alla volta.
      // per ora lavoro uno per volta
      let reader = new FileReader();
      reader.readAsText(element);
      reader.onload = (e) => {
        // this 'text' is the content of the file
        const text = reader.result;
        const wb: XLSX.WorkBook = XLSX.read(text, {type: 'string'});

        const wsname: string = wb.SheetNames[0];
        const ws: XLSX.WorkSheet = wb.Sheets[wsname];

        const allTextLines = <AOA>(XLSX.utils.sheet_to_json(ws, {header: 1}));
        console.log('test2', allTextLines);
        this.estrazioneStatistiche(allTextLines);
      };
  }

  public estrazioneStatistiche(alldata) {
    let times = [];
    let methods: Method[] = [alldata[11][0]];
    let Counter_OK = 0;
    let Counter_KO = 0;
    for (let row = 1; row < alldata.length; row++) {
      if (times.indexOf(alldata[row][0]) === -1) {
        if (alldata[row][4] === 'OK') {
          Counter_OK++;
        } else {
          Counter_KO++;
        }
      }
      for (let metodo of methods) {
          if(alldata[row][13] === 'KO') {
              if (alldata[row][11] === metodo.name) {
                metodo.value = metodo.value + 1;
                break;
              } else {
              let newMethod = new Method();
              newMethod.name = alldata[row][11];
              newMethod.value = 1;
              methods.push(newMethod);
              }
            }
          }
    }
    this.updateGraphs(Counter_OK, Counter_KO, methods);
  }

  updateGraphs(contatoreOk, contatoreKo, methods) {
    this.pieData = {
      labels: ['Good', 'Scraps'],
      datasets: [
        {
          data: [contatoreOk, contatoreKo],
          backgroundColor: [
            "#FF6384",
            "#36A2EB"
        ],
        hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB"
        ]
        }
      ]
    };
    let names = []
    let values = []
    for (let metodo of methods) {
      names.push(metodo.name);
      values.push(metodo.value);
    }
    console.log('names', names);
    //dati per il barchart
    this.barData = {
      labels: names,
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: values
        }

      ]
    };
    this.blockuiService.changeState(false);
    this.visualizzaStat = true;
  }

  public cancFromList(element) {
  let i = 0;
  for (let file of this.uploadedFiles) {
      if (file.name === element) {
        this.uploadedFiles.splice(i, 1);
        break;
        } else {
        i = i +1;
        }
    }
  }

  public updateSelectedElements(value) {
  for (let file of this.uploadedFiles) {
      if (file.name === value) {
      file.isSelected = !file.isSelected;
      break;
      }
  }
console.log('listafile', this.uploadedFiles);
  }



}
