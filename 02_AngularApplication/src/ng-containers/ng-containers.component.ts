import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-containers',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './ng-containers.component.html',
  styleUrl: './ng-containers.component.css'
})
export class NgContainersComponent {
   
  books = ["JS","Java","Python"];

  user:string = '';
}
