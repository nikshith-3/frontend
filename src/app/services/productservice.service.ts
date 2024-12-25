import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor(private http:HttpClient) { }
  getProducts(){
    return this.http.get('http://localhost:4300/products')
  }
  addProduct(newpro:any){
    return this.http.post('http://localhost:4300/add',newpro)

  }
  deleteProduct(pid:any){
    return this.http.delete(`http://localhost:4300/delete/${pid}`)
  }
  updateProduct(pid:any,newpro:any){
    return this.http.put( `http://localhost:4300/update/${pid}`,newpro)
  }

    
  }
