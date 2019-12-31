import { Component, OnInit } from '@angular/core';
import {ErrorService} from "../../services/error.service";

@Component({
  selector: 'app-errorae',
  templateUrl: './errorae.component.html',
  styleUrls: ['./errorae.component.css']
})
export class ErroraeComponent implements OnInit {

  term:String;
  tab
  documents:any={
    idError:'',
    nomFichier:'',
    dateMise:'',
    modificateur:''
  };


  etat:boolean;
  constructor(private error:ErrorService) {

  }

  ngOnInit() {
    console.log("okkkkkk")
    this.getAll();
  }
  getAll() {

    console.log(this.tab)
    this.error.allError().subscribe((res) => {

      console.log(res)
      this.tab = res;
    });

  }

  public deleteDocument(idError) {
    let conf = confirm("etes vous sur?")
    if (conf) {

      this.error.removeError(idError).subscribe();
      this.getAll();}
  }


  public edit(u) {
    this.etat = true;
    this.documents = {
      idError:u.idError,
      nomFichier:u.nomFichier,
      dateMise: u.dateMise,
      modificateur: u.modificateur,
    };

  }
  public adddoc(d) {

    console.log(d);
    this.error.addErrort(d).subscribe(res => {

      this.getAll();
    });

  }

//


  update(c) {
    this.etat = false;
    this.error.updateError(c).subscribe(res => {

      this.getAll();
    });

  }
  download(nomFichier) {
    const blob = new Blob([nomFichier], { type: 'text/pdf' });
    const url= window.URL.createObjectURL(blob);
    window.open(url);
  }




}
