import { NgModule, runInInjectionContext } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from'@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { CoffeesComponent } from './coffees/coffees.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { footerComponent } from './footer/footer.component';
import  {CartComponent} from './cart/cart.component';
import { ReactiveFormsModule } from '@angular/forms';
import Validation from './validationcomp/validation';
import { LoginComponent } from './login/login.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';






@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BlogComponent,
    CoffeesComponent,
    ContactComponent,
    HomeComponent,
    HeaderComponent,
    footerComponent,
    CartComponent,
    LoginComponent,
    AddproductComponent,
    UpdateproductComponent,
    ViewproductComponent,
    DeleteproductComponent,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
