import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpServicesService } from './Services/http-services.service';
import { onlyAlphabets, onlyNumbers, onlyNumbersTypeValidator } from './CustomValidators/CustomValidation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  products:any;
  productForm:FormGroup;
  heading:string|undefined;
  message:string|undefined;

  constructor(private fb:FormBuilder,private httpService:HttpServicesService){
    this.productForm = this.fb.group({
        id:['',[Validators.required,onlyNumbers()]],
        name:['',[Validators.required,onlyAlphabets()]],
        price:['',[Validators.required,onlyNumbersTypeValidator()]]
     }
    );
  }

  ngOnInit(){
    this.getProducts()
  }

  // Getting the list of products
  getProducts(){
     this.httpService.getProduct().subscribe((data)=>{
        //console.log(data);
        this.products = data;
        console.log(data);
        
    });
  }
 
  // Editing the product
  onEdit(type:string,rowData:any){
    this.heading = type;
   
    if(this.heading == 'Edit Product'){
      this.productForm = this.fb.group({
        id:[rowData.id],
        name:[rowData.name],
        price:[rowData.price]
      });
    }else if(this.heading == 'Add Product'){
        this.productForm = this.fb.group({
          id:['',[Validators.required,onlyNumbers()]],
          name:['',[Validators.required,onlyAlphabets()]],
          price:['',[Validators.required,onlyNumbersTypeValidator()]]
      });
      this.getProducts();
    }
    else if(this.heading == 'delete'){
      //Sending the form data form opertion
        this.productOperations(rowData)
    }
  }
 
  // Product Form Submit
  productFormSubmit(){

      if(this.productForm.invalid){
        alert("Invalid");
        return false;
      }
      // Sending the form data form opertion
       this.productOperations(this.productForm.value)
       return true;
  }
 
  // Performing the operations on product
  productOperations(formdata:object){
    if (this.heading == "Add Product") {
        this.httpService.saveProduct(formdata,(message)=>{
          // getting the callback value in message
          this.message = message;
          // getting the list of products after the operation
          this.getProducts()
        });
    }else if(this.heading == "Edit Product"){
        this.httpService.updateProduct(formdata,(message)=>{
          // getting the callback value in message
          this.message = message;
          // getting the list of products after the operation
          this.getProducts()
        });
    }else{
        this.httpService.deleteProduct(formdata,(message)=>{
          // getting the callback value in message
          this.message = message;
          // getting the list of products after the operation
          this.getProducts()
        })
    }
  }
}
