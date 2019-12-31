import { Component, OnInit } from '@angular/core';
import {DocumentService} from "../../services/document.service";

@Component({
  selector: 'app-containere',
  templateUrl: './containere.component.html',
  styleUrls: ['./containere.component.css']
})
export class ContainereComponent implements OnInit {

  documents:any={
    idD:'',
    nomF:'',
    dateM:'',
    modifi:''
  };
  term:String;
  tab:any;

  etat:boolean;



  constructor(private document:DocumentService ) {
    this.getAll();
  }



  ngOnInit() {


  }

  public getAll() {

    console.log(this.tab)
    this.document.allDocument().subscribe((res) => {

      console.log(res)
      this.tab = res;
    });
  }



  public deleteDocument(idD) {
    let conf=confirm("etes vous sur?")
    if(conf)

    { this.document.removeDocument(idD).subscribe();
      this.getAll();
    }}


  public edit(u) {
    this.etat = true;
    this.documents = {
      idD:u.idD,
      nomF:u.nomF,
      dateM: u.dateM,
      modifi: u.modifi,
    };


  }
  public adddoc(d) {

    console.log(d);
    this.document.addDocument(d).subscribe(res => {

      this.getAll();
    });

  }

//


  update(c) {
    this.etat = false;
    this.document.updateDocument(c).subscribe(res => {

      this.getAll();
    });

  }

  download(nomFichier) {
    const blob = new Blob([nomFichier], { type: 'text/pdf' });
    const url= window.URL.createObjectURL(blob);
    window.open(url);
  }





}
