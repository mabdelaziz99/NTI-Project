import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  standalone: false,
  
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor(private _userS:UserService){}

  changeUsername(myForm: NgForm){
    myForm.form.patchValue({username:'ali ali ali',email:'ali@ali.com'})
//   let value = myForm.value;
//   value.username='ali ali ali'
//  myForm.setValue(value);
  }
  postData(myForm: NgForm)
  {
    myForm.value.userType = "67692f2e41458b4ea3e4286f"
    this._userS.createUser(myForm.value).subscribe()
    console.log(myForm.value)
    if(myForm.invalid){
      console.log('invalid')
    }
    else{
    console.log('valid')
    }
  }
  


}
