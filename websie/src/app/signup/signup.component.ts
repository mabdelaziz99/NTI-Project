import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: false,
  
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  changeUsername(myForm: NgForm){
    myForm.form.patchValue({username:'ali ali ali',email:'ali@ali.com'})
//   let value = myForm.value;
//   value.username='ali ali ali'
//  myForm.setValue(value);
  }
  postData(myForm: NgForm)
  {
   
    console.log(myForm.value)
    if(myForm.invalid){
      console.log('invalid')
    }
    else{
    console.log('valid')
    }
  }


}
