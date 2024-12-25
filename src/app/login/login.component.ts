import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginform:FormGroup=new FormGroup({})
  constructor(private fb:FormBuilder,private service:AuthenticationService,private router:Router){
    this.loginform=fb.group({
      username:['',Validators.required],
      password:['',Validators.required],
    })
  }
  res:any;
  checklogin(){
    this.service.login(this.loginform.value).subscribe((data)=>{
      this.res=data;
      if(this.res.jwttoken==undefined || this.res.jwttoken==null){
        alert(this.res.result)
        }
        else{
          alert("login success");
          sessionStorage.setItem("loggedin",JSON.stringify({Token:this.res.jwttoken,id:this.res.response._id}))
        }
        if(this.res.response.role=="user"){
          this.router.navigateByUrl("/products")
        }
        else if(this.res.response.role=="admin"){
          this.router.navigateByUrl("/home");
        }
})
}}
