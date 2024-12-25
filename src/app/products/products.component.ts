import { Component } from '@angular/core';
import { ProductserviceService } from '../services/productservice.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  constructor(private service:ProductserviceService,private router:Router,private auth:AuthenticationService){}
  products:any;
  result:any;
  spro:any;
  data:any;
  ngOnInit(){
    if(sessionStorage.getItem('loggedin')==null){
      this.router.navigateByUrl('/');
    }
    else{
      this.data=sessionStorage.getItem('loggedin');
      this.data=JSON.parse(this.data);
       console.log(this.data)
      if(this.auth.istokenvalid(this.data.Token)){
    this.service.getProducts().subscribe((data)=>{
      this.products=data;
      console.log(data)
    })
  }
  else{
    this.router.navigateByUrl('/');
  }
}

  }
  deleteProduct(pid:any){
    this.service.deleteProduct(pid).subscribe((data)=>{
      this.result=data;
      alert(this.result.status)
      console.log(this.result.response)
    })
  
  }
  selectedpro(newpro:any){
    this.spro=newpro;

  }
  updatenow(pid:any,newpro:any){
    this.service.updateProduct(pid,newpro).subscribe((data)=>{
      this.result=data;
      alert(this.result.status)
    })
  }
  
}
  
