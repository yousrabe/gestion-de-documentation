import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  InscriptionComponent: FormGroup
  submitted = false

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
  }

  ngOnInit() {
    {
      this.InscriptionComponent = this.formBuilder.group({
        firstName: ['', [Validators.required, Validators.maxLength(15)]],
        lastName: ['', [Validators.required, Validators.maxLength(15)]],
        username: ['', [Validators.required, Validators.maxLength(15)]],
        email: ['', [Validators.required, Validators.maxLength(60)]],
        password: ['', [Validators.required, Validators.maxLength(15)]],


      });
    }
  }

  get f() {

    return this.InscriptionComponent.controls;
  }

  addu() {

    this.submitted = true

    // stop here if form is invalid
    if (this.InscriptionComponent.invalid) {
      return;
    }

    console.log(this.InscriptionComponent.value)

    this.userService.addUser(this.InscriptionComponent.value).subscribe(res => {

      alert('oook')


    })

  }


}

