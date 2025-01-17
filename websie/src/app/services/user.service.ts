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


  apiPostURL = 'http://localhost:3000/user'
  createUser(user: any):Observable<any>{
    // return this._http.post<any>(this.apiPostURL,{name: 'frogger'});
    //     console.log(user)
    //     this._http.post<any>(this.apiPostURL,product).pipe(
    //     tap(res=>{
    //     console.log(res)
    //   })
    console.log(user)
    return this._http.post<any>(this.apiPostURL, user)
    // return this._http.post(this.apiPostURL, product);
  }

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

  apiGetURL = 'http://localhost:3000/user'
  getUsers():Observable<any>{
    // this._http.get<any>(this.apiGetURL).pipe(tap(res=>{
    //   console.log(res);  
    // }));
    return this._http.get<any>(this.apiGetURL);
  }
}
