import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-destroy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-destroy.component.html',
  styleUrl: './ng-destroy.component.css'
})
export class NgDestroyComponent implements OnInit, OnDestroy{
  
  

  ngOnInit(): void {
    console.log("NgDestroyComponent: ngOnInit hooks is invoked...");
  }
  
  

  ngOnDestroy(): void {
    console.log("NgDestroyComponent: ngOnDestroy hooks is invoked...");
  }
}
