import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {
    path: 'admin',
    canLoad: [AdminGuard],
    loadChildren: ()=> import('./admin/admin.module').then((m)=> m.AdminModule)
  },
  {path: 'user', loadChildren: ()=> import('./user/user.module').then((u)=> u.UserModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
