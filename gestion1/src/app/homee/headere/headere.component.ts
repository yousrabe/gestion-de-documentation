import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-headere',
  templateUrl: './headere.component.html',
  styleUrls: ['./headere.component.css']
})
export class HeadereComponent implements OnInit {

  constructor(private root:Router) { }

  ngOnInit() {
  }
  logout()
  {
    localStorage.removeItem("1")
    this.root.navigate([""])


  }


}
