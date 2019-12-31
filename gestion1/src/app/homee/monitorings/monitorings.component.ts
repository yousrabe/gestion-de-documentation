import { Component, OnInit } from '@angular/core';
import {MonitoringService} from "../../services/monitoring.service";

@Component({
  selector: 'app-monitorings',
  templateUrl: './monitorings.component.html',
  styleUrls: ['./monitorings.component.css']
})
export class MonitoringsComponent implements OnInit {

  term:String;
  tab
  documents:any={
    idMoni:'',
    nomFichier:'',
    dateMise:'',
    modificateur:''
  };


  etat:boolean;
  constructor(private monitoring:MonitoringService) {

  }

  ngOnInit() {
    console.log("okkkkkk")
    this.getAll();
  }
  getAll() {

    console.log(this.tab)
    this.monitoring.allMonitoring().subscribe((res) => {

      console.log(res)
      this.tab = res;
    });
  }

  public deleteDocument(idMoni) {
    let conf = confirm("etes vous sur?")
    if (conf) {

      this.monitoring.removeMonitoring(idMoni).subscribe();
      this.getAll();
    }}


  public edit(u) {
    this.etat = true;
    this.documents = {
      idMoni:u.idMoni,
      nomFichier:u.nomFichier,
      dateMise: u.dateMise,
      modificateur: u.modificateur,
    };

  }
  public adddoc(d) {

    console.log(d);
    this.monitoring.addMonitoring(d).subscribe(res => {

      this.getAll();
    });

  }

//


  update(c) {
    this.etat = false;
    this.monitoring.updateMonitoring(c).subscribe(res => {

      this.getAll();
    });

  }

  download(nomFichier) {
    const blob = new Blob([nomFichier], { type: 'text/pdf' });
    const url= window.URL.createObjectURL(blob);
    window.open(url);
  }



}
