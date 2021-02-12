import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlogComponent } from './blog/blog.component';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { LocateMeComponent } from './locate-me/locate-me.component';


// import { LandingComponent } from './landing/landing.component';
=======
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
>>>>>>> fd2531a1a77459ae74543261cfb46fe1781461b5


@NgModule({
  declarations: [
    AppComponent,
    LocateMeComponent,
<<<<<<< HEAD
    

=======
    NavbarComponent,
    SearchComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent
>>>>>>> fd2531a1a77459ae74543261cfb46fe1781461b5
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

