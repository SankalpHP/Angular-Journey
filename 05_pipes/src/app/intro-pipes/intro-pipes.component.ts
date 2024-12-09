import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-intro-pipes',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './intro-pipes.component.html',
  styleUrl: './intro-pipes.component.css'
})
export class IntroPipesComponent {
   
  title = "introduction of pipes";
  date:Date = new Date();

  employee = [
    {
      name:"Jackson",
      city:"America",
      age:31
    },
    {
      name:"mason",
      city:"England",
      age:28
    },
    {
      name:"panther",
      city:"India",
      age:22
    },
    {
      name:"ronni",
      city:"China",
      age:34
    }
  ];
}
