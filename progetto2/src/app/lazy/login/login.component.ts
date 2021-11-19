import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /*controllo info inserite
  onFormSubmit(userForm: NgForm) {
   console.log(userForm.value);
    console.log('email:' + userForm.controls['email'].value);
    console.log('password:' + userForm.controls['password'].value);
  }*/
}
