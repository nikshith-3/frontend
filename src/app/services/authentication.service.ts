import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) {}
  register(newregister:any){
    return this.http.post('http://localhost:4300/users/registration',newregister)
    
  }
  istokenvalid(token:any){
    const decode:any=jwtDecode(token);
    return(new Date().getTime()<decode.exp*1000)

  }
  login(log:any){
    console.log(log)
    return this.http.post('http://localhost:4300/users/login',log)
  }
}
