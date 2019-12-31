import { Component, OnInit } from '@angular/core';
import {DocumentService} from "../../services/document.service";
import {JobService} from "../../services/job.service";

@Component({
  selector: 'app-jobmssql',
  templateUrl: './jobmssql.component.html',
  styleUrls: ['./jobmssql.component.css']
})
export class JobmssqlComponent implements OnInit {
  term:String;
  tab
  documents:any={
    idBackup:'',
    nomFichier:'',
    dateMise:'',
    modificateur:''
  };


  etat:boolean;
  constructor(private job:JobService) {

  }

  ngOnInit() {
    console.log("okkkkkk")
    this.getAll();
  }
  getAll() {

    console.log(this.tab)
    this.job.allJob().subscribe((res) => {

      console.log(res)
      this.tab = res;
    });

  }

  public deleteDocument(idJob) {
    let conf = confirm("etes vous sur?")
    if (conf) {

      this.job.removeJob(idJob).subscribe();
    this.getAll();
  }}


  public edit(u) {
    this.etat = true;
    this.documents = {
      idJob:u.idJob,
      nomFichier:u.nomFichier,
      dateMise: u.dateMise,
      modificateur: u.modificateur,
    };

  }
  public adddoc(d) {

    console.log(d);
    this.job.addJob(d).subscribe(res => {

      this.getAll();
    });

  }

//


  update(c) {
    this.etat = false;
    this.job.updateJob(c).subscribe(res => {

      this.getAll();
    });

  }
  download(nomFichier) {
    const blob = new Blob([nomFichier], { type: 'text/pdf' });
    const url= window.URL.createObjectURL(blob);
    window.open(url);
  }



}
