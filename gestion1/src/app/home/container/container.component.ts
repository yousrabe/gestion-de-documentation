import { Component, OnInit } from '@angular/core';
import {DocumentService} from "../../services/document.service";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {MdocumentService} from "../../Model/mdocument.service";
import {FormBuilder} from "@angular/forms";
import {FileUploader} from "ng2-file-upload";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

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
