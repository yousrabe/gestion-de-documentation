import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-comptem',
  templateUrl: './comptem.component.html',
  styleUrls: ['./comptem.component.css']
})
export class ComptemComponent implements OnInit {
  clients:any={
    idUser:'',
    lastName:'',
    firstName:'',
    username:'',
    email:'',
    password1:''
  };



nouveau;
resaisir;
  constructor(private client:UserService) { }

  ngOnInit() {
  }

  modification(u)
  {
    if(u.password1=="123456" && this.nouveau==this.resaisir)
    {
      this.clients = {
        idUser:u.idUser,
        lastName:u.lastName,
        firstName: u.firstName,
        username: u.username,
        email: u.email,
        password1: u.password1,
      };
      this.client.updateClient(u);
    }

  }

}
