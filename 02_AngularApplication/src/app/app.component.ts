import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StructuralDirectivesComponent } from '../structural-directives/structural-directives.component';
import { AtttibuteDirectivesComponent } from '../atttibute-directives/atttibute-directives.component';
import { NgContainersComponent } from '../ng-containers/ng-containers.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,StructuralDirectivesComponent,AtttibuteDirectivesComponent,NgContainersComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '02_AngularApplication';

  a = 10;
  b = 20;

  calc(){
    return this.a + this.b;
  }

  person = {
    name:"Sankalp Selokar",
    age:24,
    position:"Full Stack Developer"
  };

  employee = [
    {id:1,name:"Jacob",salary:45000},
    {id:2,name:"Max",salary:5000}
  ];
}
