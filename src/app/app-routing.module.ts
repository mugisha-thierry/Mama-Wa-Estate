import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { ProductsComponent } from './products/products.component';
import { SinglestoreComponent } from './singlestore/singlestore.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProfileComponent } from './profile/profile.component';
import { LocateMeComponent } from './locate-me/locate-me.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'locateme', component:LocateMeComponent},
  {path: 'profile', component: ProfileComponent},
  { path: 'checkout', component: CheckoutComponent},
  { path: 'singlestore/:id', component: SinglestoreComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'product/:id', component: ProductsComponent},
  { path: 'search', component: SearchComponent},
  { path: 'cart', component: CartComponent, canActivate:[AuthGuard]},
  { path: '', redirectTo: "/home", pathMatch: "full" },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
