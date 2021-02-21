import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData:any = {}
  // registerUserData = {}

  constructor(private _auth: AuthService,private _router: Router) { }

  ngOnInit(): void {
  }
  registerUser() {
    // console.log(this.registerUserData)
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      res => {
        localStorage.setItem('auth_token',res.data.auth_token)
        this._router.navigate(['/home'])
        // console.log(res)
      },
      err => console.log(err)
    )      
  }

}
