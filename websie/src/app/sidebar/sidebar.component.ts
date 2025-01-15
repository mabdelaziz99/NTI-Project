import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})


export class SidebarComponent implements OnInit {

  isLogedIn= true
  constructor(private _authS:AuthService,private _router:Router){
  
  }
  ngOnInit(): void {
    this._authS.getAccessToken().subscribe(data=>{
      if(data === null){
        this.isLogedIn = false;
      }
      else{
        this.isLogedIn = true;
      }
    })
  }



  logout()
  {
    this._authS.logout();
    this._router.navigate(['/login'])
    console.log('logout')
  }
}
