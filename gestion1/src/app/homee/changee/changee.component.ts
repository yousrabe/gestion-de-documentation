import { Component, OnInit } from '@angular/core';
import {ChangeService} from "../../services/change.service";

@Component({
  selector: 'app-changee',
  templateUrl: './changee.component.html',
  styleUrls: ['./changee.component.css']
})
export class ChangeeComponent implements OnInit {

  term ;
  tab;
  documents:any={
    idChange:'',
    nomFichier:'',
    dateMise:'',
    modificateur:''
  };


  etat:boolean;

  constructor(private change:ChangeService) { }

  ngOnInit() {
    console.log("okkkkkk")
    this.getAll();
  }
  getAll() {

    console.log(this.tab)
    this.change.allChange().subscribe((res) => {

      console.log(res)
      this.tab = res;
    });



  }


  public deleteDocument(idChange) {
    let conf = confirm("etes vous sur?")
    if (conf) {

      this.change.removeChange(idChange).subscribe();
      this.getAll();
    }
  }

  public edit(u) {
    this.etat = true;
    this.documents = {
      idChange:u.idChange,
      nomFichier:u.nomFichier,
      dateMise: u.dateMise,
      modificateur: u.modificateur,
    };

  }
  public adddoc(d) {

    console.log(d);
    this.change.addChange(d).subscribe(res => {

      this.getAll();
    });

  }

//


  update(c) {
    this.etat = false;
    this.change.updateChange(c).subscribe(res => {

      this.getAll();
    });

  }
  download(nomFichier) {
    const blob = new Blob([nomFichier], { type: 'text/pdf' });
    const url= window.URL.createObjectURL(blob);
    window.open(url);
  }
}
