import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { activeGuard } from './Guard/active.guard';
import path from 'path';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  {
    path:'parent',
    component:ParentComponent,
    canActivateChild:[activeGuard],
    children:[
      {path:'child1',component:Child1Component,pathMatch:'full'},
      {path:'child2',component:Child2Component,pathMatch:'full'}
    ]
  },
  {path:'**',redirectTo:'parent',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
