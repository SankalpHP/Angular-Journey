import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { ShirtComponent } from './shirt/shirt.component';
import { ShoeComponent } from './shoe/shoe.component';
import { PantComponent } from './pant/pant.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent},
  {path:"product",component:ProductComponent,children:[
    {path:"",redirectTo:"shirt",pathMatch:"full"},// redirectTo to shirt route when click on product 
                                                  // when no route is matched
    {path:"shirt",component:ShirtComponent},      //  pathMatch:"match the full url of the route"
    {path:"shoe",component:ShoeComponent},
    {path:"pant",component:PantComponent}
  ]},
  {path:"**",redirectTo:"home",pathMatch:"full"}// wild card url if no route match by default 
                                                // redirect to "home"
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
