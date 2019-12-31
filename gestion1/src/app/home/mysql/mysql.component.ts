import { Component, OnInit } from '@angular/core';
import {DocumentService} from "../../services/document.service";
import {MysqlService} from "../../services/mysql.service";

@Component({
  selector: 'app-mysql',
  templateUrl: './mysql.component.html',
  styleUrls: ['./mysql.component.css']
})
export class MysqlComponent implements OnInit {
  term:String;
  tab
  documents:any={
    idMysql:'',
    nomFichier:'',
    dateMise:'',
    modificateur:''
  };


  etat:boolean;
  constructor(private mysql:MysqlService) {

  }

  ngOnInit() {
    console.log("okkkkkk")
    this.getAll();
  }
  getAll() {

    console.log(this.tab)
    this.mysql.allMysql().subscribe((res) => {

      console.log(res)
      this.tab = res;
    });

  }

  public deleteDocument(idMysql) {
    let conf = confirm("etes vous sur?")
    if (conf) {


      this.mysql.removeMysql(idMysql).subscribe();
    this.getAll();}
  }


  public edit(u) {
    this.etat = true;
    this.documents = {
      idMysql:u.idMysql,
      nomFichier:u.nomFichier,
      dateMise: u.dateMise,
      modificateur: u.modificateur,
    };

  }
  public adddoc(d) {

    console.log(d);
    this.mysql.addMysql(d).subscribe(res => {

      this.getAll();
    });

  }

//


  update(c) {
    this.etat = false;
    this.mysql.updateMysql(c).subscribe(res => {

      this.getAll();
    });

  }

  download(nomFichier) {
    const blob = new Blob([nomFichier], { type: 'text/pdf' });
    const url= window.URL.createObjectURL(blob);
    window.open(url);
  }

}
