import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignupComponent } from './signup/signup.component';
import { authGuard } from './guards/auth.guard';
import { RfComponent } from './rf/rf.component';
import { AddUserTypeComponent } from './add-user-type/add-user-type.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { ProductDetailsComponent } from './products-list/product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  // {path:'',component:HomeComponent}
  
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'product',component:ProductsListComponent},
  {path:'product-details',component:ProductDetailsComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  // canActivate:[authGuard]
  {path:'signup',component:SignupComponent},
  {path:'rf',component:RfComponent},
  {path:'addtype',component:AddUserTypeComponent},
  {path:'myaccount',component:MyaccountComponent},
  {path:'cart',component:CartComponent},
  {path:'checkout',component:CheckoutComponent},

  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//ng new projectName --no-standalone

//mydomain.com
//mydomain.com/home