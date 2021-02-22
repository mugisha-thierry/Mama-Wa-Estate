import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocateMeComponent } from './locate-me/locate-me.component';


// import { LandingComponent } from './landing/landing.component';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { ProductsComponent } from './products/products.component';
import { GpsService } from './gps.service';
import { StoreComponent } from './store/store.component';
import { CategoryComponent } from './category/category.component';
import { FooterComponent } from './footer/footer.component';
import { StoreService } from './store.service';
import { AgmCoreModule } from '@agm/core';

import { LocateDirective } from './locate.directive';
import { CategoryService } from './category.service';

import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { SinglestoreComponent } from './singlestore/singlestore.component';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';
import { CheckoutComponent } from './checkout/checkout.component';



@NgModule({
  declarations: [
    AppComponent,
    LocateMeComponent,
    NavbarComponent,
    SearchComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ProductsComponent,
    LoginComponent,
    StoreComponent,
    CategoryComponent,
    FooterComponent,
    LocateDirective,
    SinglestoreComponent,
    CartComponent,
    ProfileComponent,
    CheckoutComponent,

  ],
  imports: [
    NgProgressModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAgBh9gsaBhoWFVUgdpc7i7jXBfR3ONuGs'
    }),
    NgProgressHttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [AuthService,AuthGuard, GpsService, StoreService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }

