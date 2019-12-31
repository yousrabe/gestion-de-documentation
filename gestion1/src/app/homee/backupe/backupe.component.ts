import { Component, OnInit } from '@angular/core';
import {BackupService} from "../../services/backup.service";

@Component({
  selector: 'app-backupe',
  templateUrl: './backupe.component.html',
  styleUrls: ['./backupe.component.css']
})
export class BackupeComponent implements OnInit {

  term:String;
  tab
  documents:any={
    idBackup:'',
    nomFichier:'',
    dateMise:'',
    modificateur:''
  };


  etat:boolean;
  constructor(private backup:BackupService) {

  }

  ngOnInit() {
    console.log("okkkkkk")
    this.getAll();
  }
  getAll() {

    console.log(this.tab)
    this.backup.allBackup().subscribe((res) => {

      console.log(res)
      this.tab = res;
    });}


  public deleteDocument(idBackup) {
    let conf=confirm("etes vous sur?")
    if(conf)

    {
      this.backup.removeBackup(idBackup).subscribe();
      this.getAll();}
  }


  public edit(u) {
    this.etat = true;
    this.documents = {
      idConn:u.idConn,
      nomFichier:u.nomFichier,
      dateMise: u.dateMise,
      modificateur: u.modificateur,
    };

  }
  public adddoc(d) {

    console.log(d);
    this.backup.addBackup(d).subscribe(res => {

      this.getAll();
    });

  }

//


  update(c) {
    this.etat = false;
    this.backup.updateBackup(c).subscribe(res => {

      this.getAll();
    });

  }
  download(nomFichier) {
    const blob = new Blob([nomFichier], { type: 'text/pdf' });
    const url= window.URL.createObjectURL(blob);
    window.open(url);
  }



}
