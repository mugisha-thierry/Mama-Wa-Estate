import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'ngx-flash-messages';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData:any = {}
  // registerUserData = {}

  constructor(private flashMessagesService: FlashMessagesService,private _auth: AuthService,private _router: Router) { }

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
      err =>{
        this.flashMessagesService.show('Something is missing !', {
          classes: ['alert', 'alert-warning'], // You can pass as many classes as you need
          timeout: 5000, // Default is 3000
        });
      }
    )      
  }

}
