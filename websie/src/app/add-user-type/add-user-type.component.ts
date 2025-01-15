import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-user-type',
  standalone: false,
  
  templateUrl: './add-user-type.component.html',
  styleUrl: './add-user-type.component.css'
})
export class AddUserTypeComponent {
  constructor(private _userS:UserService){}
userTypeForm :FormGroup = new FormGroup({
  name : new FormControl(''),
  desc: new FormControl('')
})

addNewType(){
  this._userS.addNewUserType(this.userTypeForm.value).subscribe(data => console.log(data))
  

  
}
}
