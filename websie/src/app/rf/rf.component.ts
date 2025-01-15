import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidators } from '../custom-validators/password.validator';

@Component({
  selector: 'app-rf',
  standalone: false,
  
  templateUrl: './rf.component.html',
  styleUrl: './rf.component.css'
})
export class RfComponent implements OnInit {

signupForm! : FormGroup;

ngOnInit(): void {
   
  this.signupForm= new FormGroup({
    username : new FormControl('',[Validators.required,Validators.minLength(5)]),
    email :new FormControl('',[Validators.required,Validators.email]),
    password : new FormControl('',[Validators.required,PasswordValidators.passwordStrength()]),
    retypepassword: new FormControl('',[Validators.required]),
//,PasswordValidators.matchPassword()
    phoneno : new FormControl(''),
    languages : new FormArray([
      new FormControl('')
    ])
  },{validators : PasswordValidators.matchPasswordForm})
}


get getlanguages(): FormArray{
return this.signupForm.get('languages') as FormArray;
}

addLanguage(){
  let myArray = this.signupForm.get('languages') as FormArray;
  myArray.push(new FormControl(''))
}

signup(){
  
  console.log(this.signupForm.value);
  
}
}
