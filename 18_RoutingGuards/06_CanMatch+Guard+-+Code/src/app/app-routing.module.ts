import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoadAdminGuard } from './guards/load-admin.guard';

const routes: Routes = [
  {
    path: 'home',
    canMatch: [LoadAdminGuard],
    loadChildren: ()=> import('./admin/admin.module').then((m)=> m.AdminModule)
  },
  {
    path: 'home', 
    loadChildren: ()=> import('./user/user.module').then((u)=> u.UserModule)
  },
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
