import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,tap } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient,private _authS:AuthService) { }
  url="http://localhost:3000/usertype"

  addNewUserType(userType:any):Observable<any>{
 let token = ''
 this._authS.getAccessToken().subscribe(data =>
 {
  if(data)
  {
token = data
  }
 }
 )
console.log('token',token)
 
  // add userType
const headers = new HttpHeaders({
  'Authorization': `Bearer ${token}`,
  'Content-type' : 'application/json'
})
console.log(headers)
 return this._http.post<any>(this.url,userType,{headers})
 
  }
}
