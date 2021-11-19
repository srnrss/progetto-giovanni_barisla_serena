import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }


  ngOnInit(): void {
  }

 

   //apertura pagina(richiamato in accesso())
   apripagina(pagina:string):void{
    this.router.navigate([`${pagina}`]);
   }
  
   

  //accesso pagina:
  //user/0
  //user/1
  //user/2
  accesso(){
  var email_input= document.getElementById("email") as HTMLInputElement  
  var password_input =document.getElementById("password") as HTMLInputElement

   if(email_input.value===""||password_input.value===""){
    alert("riempire tutti i campi")
  }else if(email_input.value==="giovanni@gmail.com"&&password_input.value==="1234"){
    this.apripagina("user/0")
  }else if(email_input.value==="serena@gmail.com"&&password_input.value==="1234"){
    this.apripagina("user/1")
  }else if(email_input.value==="barisla@gmail.com" && password_input.value==="1234"){
    this.apripagina("user/2")
  }else {
    alert("accesso negato")
  }



  }
  /*controllo info inserite
  onFormSubmit(userForm: NgForm) {
   console.log(userForm.value);
    console.log('email:' + userForm.controls['email'].value);
    console.log('password:' + userForm.controls['password'].value);
  }*/
}
