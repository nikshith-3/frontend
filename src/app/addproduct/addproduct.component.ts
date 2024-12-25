import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductserviceService } from '../services/productservice.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent {
  addProductForm:FormGroup=new FormGroup({});
  constructor(private fb:FormBuilder,private service:ProductserviceService){
    this.addProductForm=this.fb.group({
      productID:['',Validators.required],
      productName:['',Validators.required],
      productDescription:['',Validators.required],
      productPrice:['',Validators.required],
    })
}
result:any;
addProduct(){
  this.service.addProduct(this.addProductForm.value).subscribe((data)=>{
    this.result=data;
    alert(this.result.result)
  })
}
}

