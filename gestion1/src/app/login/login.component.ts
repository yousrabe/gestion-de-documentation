import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MuserService} from "../Model/muser.service";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  email
  password
  user:MuserService

  constructor(public router: Router,private us:UserService) {
  }

  ngOnInit() {
  }

  login() {
    console.log(this.email)
    console.log(this.password)

    if (this.email =="root"  && this.password =="root") {
      localStorage.setItem("1", "1")
      console.log("ok")
      this.router.navigate(['/home'])
    } else {
      localStorage.setItem("1", "1")
      console.log("ok")
      this.router.navigate(['/homee'])
    }


  }
 /* logine(e)
  {


   console.log(this.us.findEm(e).subscribe())
  }*/
}
