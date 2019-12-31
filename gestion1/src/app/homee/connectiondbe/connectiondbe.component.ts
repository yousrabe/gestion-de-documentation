import { Component, OnInit } from '@angular/core';
import {ConnexionService} from "../../services/connexion.service";

@Component({
  selector: 'app-connectiondbe',
  templateUrl: './connectiondbe.component.html',
  styleUrls: ['./connectiondbe.component.css']
})
export class ConnectiondbeComponent implements OnInit {

  term:String;
  tab
  documents:any={
    idConn:'',
    nomFichier:'',
    dateMise:'',
    modificateur:''
  };


  etat:boolean;
  constructor(private connexion:ConnexionService) {

  }

  ngOnInit() {
    console.log("okkkkkk")
    this.getAll();
  }
  getAll() {

    console.log(this.tab)
    this.connexion.allConnexion().subscribe((res) => {

      console.log(res)
      this.tab = res;
    });}


  public deleteDocument(idConn) {
    let conf = confirm("etes vous sur?")
    if (conf) {


      this.connexion.removeConnexion(idConn).subscribe();
      this.getAll();
    }}


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
    this.connexion.addConnexion(d).subscribe(res => {

      this.getAll();
    });

  }

//


  update(c) {
    this.etat = false;
    this.connexion.updateConnexion(c).subscribe(res => {

      this.getAll();
    });

  }
  download(nomFichier) {
    const blob = new Blob([nomFichier], { type: 'text/pdf' });
    const url= window.URL.createObjectURL(blob);
    window.open(url);
  }







}
