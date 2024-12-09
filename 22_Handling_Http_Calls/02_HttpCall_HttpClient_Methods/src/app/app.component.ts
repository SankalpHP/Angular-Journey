import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private http:HttpClient){}
  
  postData(){
      
    const user = {
      id:11,
      name:'XYZ',
      email:'xyz@gmail.com'
    }

    this.http.post("https://jsonplaceholder.typicode.com/users",user).subscribe((response)=>{
      console.log("Data is added = ",response);
    });
  }

  putData(){

    const user = {
      id:1,
      name:'XYZ',
      email:'xyz@gmail.com'
    }

    this.http.put(`https://dummyjson.com/posts/${user.id}`,user).subscribe((response)=>{
      console.log("Data is updated = ",response);
    });
  }

  deleteData(){
    const user = {
      id:1,
      name:'XYZ',
      email:'xyz@gmail.com'
    }

    this.http.delete(`https://dummyjson.com/posts/${user.id}`).subscribe({
      next(value) {
        console.log("Data is deleted successfully... ", value);
      },
      error() {
        console.log("Something Went Wrong...");
      },
    });
  }
}
