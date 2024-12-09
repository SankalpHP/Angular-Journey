import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-json-pipe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './json-pipe.component.html',
  styleUrl: './json-pipe.component.css'
})
export class JsonPipeComponent {
  
  product = {
    "products": [
      {
        "id": 1,
        "name": "Wireless Mouse",
        "description": "A smooth and responsive wireless mouse with ergonomic design.",
        "price": 25.99,
        "category": "Electronics",
        "stock": 150,
        "rating": 4.5
      },
      {
        "id": 2,
        "name": "Bluetooth Headphones",
        "description": "High-quality Bluetooth headphones with noise cancellation.",
        "price": 99.99,
        "category": "Electronics",
        "stock": 80,
        "rating": 4.7
      },
      {
        "id": 3,
        "name": "Stainless Steel Water Bottle",
        "description": "Durable, insulated water bottle that keeps drinks cold for 24 hours.",
        "price": 19.99,
        "category": "Home & Kitchen",
        "stock": 200,
        "rating": 4.3
      },
      {
        "id": 4,
        "name": "Yoga Mat",
        "description": "Non-slip yoga mat with extra cushioning for joint protection.",
        "price": 29.99,
        "category": "Sports & Outdoors",
        "stock": 120,
        "rating": 4.6
      },
      {
        "id": 5,
        "name": "Smartwatch",
        "description": "Feature-packed smartwatch with heart rate monitor and GPS.",
        "price": 199.99,
        "category": "Electronics",
        "stock": 60,
        "rating": 4.4
      },
      {
        "id": 6,
        "name": "LED Desk Lamp",
        "description": "Energy-efficient LED desk lamp with adjustable brightness levels.",
        "price": 39.99,
        "category": "Home & Kitchen",
        "stock": 100,
        "rating": 4.2
      }
    ]
  }

  student = [
    {
      "name": "alice",
      "age": 21,
      "gender": "female",
      "major": "computer science"
    },
    {
      "name": "andrew",
      "age": 23,
      "gender": "male",
      "major": "electrical engineering"
    },
    {
      "name": "charlie",
      "age": 20,
      "gender": "male",
      "major": "sociology"
    },
    {
      "name": "sarah",
      "age": 25,
      "gender": "female",
      "major": "biomedical engineering"
    }
  ]
  
  showJson:boolean = false;
  togglebtn(){
     this.showJson = !this.showJson;
     console.log(this.showJson);
     
  }
  
}
