import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-number-pipe',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './number-pipe.component.html',
  styleUrl: './number-pipe.component.css'
})
export class NumberPipeComponent {
  
  pi = 3.14159

  weightPound:number = 0;
  weightKg:number = 0;
  
  convertPoundToKg(){
     this.weightKg = this.weightPound * 0.45359237;
  }
}
