import { Component, OnInit } from '@angular/core';
import {DocumentService} from "../../services/document.service";
import {InformixService} from "../../services/informix.service";

@Component({
  selector: 'app-informix',
  templateUrl: './informix.component.html',
  styleUrls: ['./informix.component.css']
})
export class InformixComponent implements OnInit {

  term:String;
  tab
  documents:any={
    idInfo:'',
    nomFichier:'',
    dateMise:'',
    modificateur:''
  };


  etat:boolean;
  constructor(private informix:InformixService) {

  }

  ngOnInit() {
    console.log("okkkkkk")
    this.getAll();
  }
  getAll() {

    console.log(this.tab)
    this.informix.allInformix().subscribe((res) => {

      console.log(res)
      this.tab = res;
    });
  }

  public deleteDocument(idInfo) {
    let conf = confirm("etes vous sur?")
    if (conf) {


      this.informix.removeInformix(idInfo).subscribe();
    this.getAll();}
  }


  public edit(u) {
    this.etat = true;
    this.documents = {
      idInfo:u.idInfo,
      nomFichier:u.nomFichier,
      dateMise: u.dateMise,
      modificateur: u.modificateur,
    };

  }
  public adddoc(d) {

    console.log(d);
    this.informix.addInformix(d).subscribe(res => {

      this.getAll();
    });

  }

//


  update(c) {
    this.etat = false;
    this.informix.updateInformix(c).subscribe(res => {

      this.getAll();
    });

  }
  download(nomFichier) {
    const blob = new Blob([nomFichier], { type: 'text/pdf' });
    const url= window.URL.createObjectURL(blob);
    window.open(url);
  }




}
