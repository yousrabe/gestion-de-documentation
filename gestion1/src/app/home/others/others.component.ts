import { Component, OnInit } from '@angular/core';
import {DocumentService} from "../../services/document.service";
import {OthersService} from "../../services/others.service";

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.css']
})
export class OthersComponent implements OnInit {
  term:String;
  tab
  documents:any={
    idOthers:'',
    nomFichier:'',
    dateMise:'',
    modificateur:''
  };


  etat:boolean;
  constructor(private others:OthersService) {

  }

  ngOnInit() {
    console.log("okkkkkk")
    this.getAll();
  }
  getAll() {

    console.log(this.tab)
    this.others.allOthers().subscribe((res) => {

      console.log(res)
      this.tab = res;
    });
  }

  public deleteDocument(idOthers) {
    let conf = confirm("etes vous sur?")
    if (conf) {

      this.others.removeOthers(idOthers).subscribe();
    this.getAll();
  }}


  public edit(u) {
    this.etat = true;
    this.documents = {
      idOthers:u.idOthers,
      nomFichier:u.nomFichier,
      dateMise: u.dateMise,
      modificateur: u.modificateur,
    };

  }
  public adddoc(d) {

    console.log(d);
    this.others.addOthers(d).subscribe(res => {

      this.getAll();
    });

  }

//


  update(c) {
    this.etat = false;
    this.others.updateOthers(c).subscribe(res => {

      this.getAll();
    });

  }


  download(nomFichier) {
    const blob = new Blob([nomFichier], { type: 'text/pdf' });
    const url= window.URL.createObjectURL(blob);
    window.open(url);
  }

}
