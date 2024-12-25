import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  registrationForm:FormGroup=new FormGroup({})
  constructor(private fb:FormBuilder,private service:AuthenticationService,private router:Router){
    this.registrationForm=fb.group({
      username:['',Validators.required],
      password:['',Validators.required],
      email:['',Validators.required],
      phone:['',Validators.required],
      role:['',Validators.required]
    })
  }
  res:any;
  register(){
    this.service.register(this.registrationForm.value).subscribe((data)=>{
      this.res=data
      console.log(this.res)
      if(this.res.status=="user registered successfully"){
        alert(this.res.status)

        this.router.navigateByUrl('/');
      }
      else{
        alert(this.res.status)
      }
      
    }) 
   }

}
