import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { LocateMeComponent } from './locate-me/locate-me.component';


// import { LandingComponent } from './landing/landing.component';

import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { ProductsComponent } from './products/products.component';



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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

