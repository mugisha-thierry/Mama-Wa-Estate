import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData: any = {};
  // loginUserData = {}

  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }


  loginUser () {
    // console.log(this.loginUserData)
    this._auth.loginUser(this.loginUserData)
     .subscribe(
       res => {
         localStorage.setItem('auth_token',res.data.auth_token)
         this._router.navigate(['/home'])
        //  console.log(res)
        },
       err => console.log(err)
     )
  }

}
