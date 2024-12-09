import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';

const routes: Routes = [
  {path:"parent",component:ParentComponent,
    children:[
      {path:'child1',component:Child1Component},
      {path:'child2',component:Child2Component}
    ]},
  {path:"",redirectTo:'parent',pathMatch:'full'}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
