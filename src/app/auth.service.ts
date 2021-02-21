import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "http://127.0.0.1:8000/api/auth/register";
  private _loginUrl = "http://127.0.0.1:8000/api/auth/login";

  constructor(private http: HttpClient, private _router: Router) { }

  registerUser(user){
    return this.http.post<any>(this._registerUrl,user)
  }
  loginUser(user){
    return this.http.post<any>(this._loginUrl,user)
  }

  logoutUser() {
    localStorage.removeItem('auth_token')
    this._router.navigate(['/home'])
  }

  getToken() {
    return localStorage.getItem('auth_token')
  }

  loggedIn() {
    return !!localStorage.getItem('auth_token')    
  }
  
}

