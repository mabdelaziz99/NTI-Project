import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http:HttpClient) { 
    const token = localStorage.getItem('token');
    if(token){
      this.tokenSubject.next(token);
    }
  }
private tokenSubject : BehaviorSubject <string | null> = new BehaviorSubject<string | null> (null);

 apiURL = 'http://localhost:3000/user/login'
login(loginObj:any):Observable<any>{
    console.log(loginObj)
    return this._http.post<any>(this.apiURL,loginObj).pipe(
    tap(res=>{
    
    const accessToken = res.accessToken;
    if(accessToken){
      localStorage.setItem('token',accessToken);
      this.tokenSubject.next(accessToken);
    }

    console.log(accessToken);
  })
)
  }



  logout(){
localStorage.removeItem('token');
this.tokenSubject.next(null);
  }

  getAccessToken():Observable<string | null>{
    return this.tokenSubject.asObservable();
  }

isAuthorized():boolean{
  return this.tokenSubject.value !== null;
}


getDecodeToken():any{
const token = this.tokenSubject.value;
if(token){
return jwtDecode<any>(token);
}
return null;
}
}
