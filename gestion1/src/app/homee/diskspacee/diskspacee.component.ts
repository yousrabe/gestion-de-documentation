import { Component, OnInit } from '@angular/core';
import {DiskService} from "../../services/disk.service";

@Component({
  selector: 'app-diskspacee',
  templateUrl: './diskspacee.component.html',
  styleUrls: ['./diskspacee.component.css']
})
export class DiskspaceeComponent implements OnInit {

  term:String;
  tab
  documents:any={
    idDisk:'',
    nomFichier:'',
    dateMise:'',
    modificateur:''
  };

  etat:boolean;
  constructor(private disk:DiskService) {

  }

  ngOnInit() {
    console.log("okkkkkk")
    this.getAll();
  }
  getAll() {

    console.log(this.tab)
    this.disk.allDisk().subscribe((res) => {

      console.log(res)
      this.tab = res;
    });

  }

  public deleteDocument(idDisk) {
    let conf = confirm("etes vous sur?")
    if (conf) {

      this.disk.removeDisk(idDisk).subscribe();
      this.getAll();}
  }


  public edit(u) {
    this.etat = true;
    this.documents = {
      idDisk:u.idDisk,
      nomFichier:u.nomFichier,
      dateMise: u.dateMise,
      modificateur: u.modificateur,
    };

  }
  public adddoc(d) {

    console.log(d);
    this.disk.addDisk(d).subscribe(res => {

      this.getAll();
    });

  }

//


  update(c) {
    this.etat = false;
    this.disk.updateDisk(c).subscribe(res => {

      this.getAll();
    });

  }
  download(nomFichier) {
    const blob = new Blob([nomFichier], { type: 'text/pdf' });
    const url= window.URL.createObjectURL(blob);
    window.open(url);
  }



}
