import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { testguardGuard } from './guards/testguard.guard';

const routes: Routes = [
  {path:'admin',component:AdminComponent,canActivate:[testguardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
