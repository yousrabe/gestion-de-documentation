import { Component, OnInit } from '@angular/core';
import {PerformanceService} from "../../services/performance.service";


@Component({
  selector: 'app-perforamance',
  templateUrl: './perforamance.component.html',
  styleUrls: ['./perforamance.component.css']
})
export class PerforamanceComponent implements OnInit {

  term:String;
  tab
  documents:any={
    idPerfo:'',
    nomFichier:'',
    dateMise:'',
    modificateur:''
  };


  etat:boolean;
  constructor(private performance:PerformanceService) {

  }

  ngOnInit() {
    console.log("okkkkkk")
    this.getAll();
  }
  getAll() {

    console.log(this.tab)
    this.performance.allPerformance().subscribe((res) => {

      console.log(res)
      this.tab = res;
    });

  }

  public deleteDocument(idPerfo) {
    let conf = confirm("etes vous sur?")
    if (conf) {

      this.performance.removePerformance(idPerfo).subscribe();
    this.getAll();
  }}


  public edit(u) {
    this.etat = true;
    this.documents = {
      idPerfo:u.idPerfo,
      nomFichier:u.nomFichier,
      dateMise: u.dateMise,
      modificateur: u.modificateur,
    };

  }
  public adddoc(d) {

    console.log(d);
    this.performance.addPerformance(d).subscribe(res => {

      this.getAll();
    });

  }

//


  update(c) {
    this.etat = false;
    this.performance.updatePerformance(c).subscribe(res => {

      this.getAll();
    });

  }

  download(nomFichier) {
    const blob = new Blob([nomFichier], { type: 'text/pdf' });
    const url= window.URL.createObjectURL(blob);
    window.open(url);
  }


}

