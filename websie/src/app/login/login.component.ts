import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private _auth:AuthService,private _router :Router){}
  submitForm(myForm:NgForm){
    this._auth.login(myForm.value).subscribe(
      {
        
       next: ()=> {
        if(this._auth.getDecodeToken().usertype == "admin"
        ){this._router.navigate(['/dashboard'])}
        else{this._router.navigate(['/myaccount'])}
        },
       
        error:(err)=>console.log(err.message)
      }
    )
  }
}

