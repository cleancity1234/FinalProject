import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { CoffeesComponent } from './coffees/coffees.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { footerComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';





const routes: Routes = [
  
  
  {path:"header",component:HeaderComponent},
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"blog",component:BlogComponent},
  {path:"coffees",component:CoffeesComponent},
{path:"contact",component:ContactComponent},
  
  {path:"cart",component:CartComponent},
 
  {path:"login",component:LoginComponent},
  {path:"addproduct",component:AddproductComponent},
  {path:"viewproduct",component:ViewproductComponent},
  {path:"deleteproduct",component:DeleteproductComponent},
  {path:"updateproduct",component:UpdateproductComponent},
  {path:"footer",component:footerComponent}


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
