import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  public message: string;
  public wrongPassword: boolean = false;
  public missingUser: boolean = false;
  private usernameIn: string;
  private passwordIn: string;

  private devmode = true;
  

  constructor(public authService: AuthService, public router: Router) {
  this.setMessage()}

  ngOnInit() {
  }
  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  OnKey(username: string) {
  this.missingUser = false;
  this.wrongPassword = false;
  this.usernameIn = username;
  }

  OnKeyPw(password) {
  this.wrongPassword = false;
  this.passwordIn = password;
  }

  TryLogin(password) {
  this.passwordIn = password;
  this.login();
  }

  login() {
  if (devmode){
  return true;
  } else {
  if(!this.usernameIn || this.usernameIn === '') {
  this.missingUser = true;
  this.wrongPassword = true;
  } else if (!this.passwordIn|| this.passwordIn === '') {
  this.wrongPassword = true;
  } else {
      this.authService.login(this.usernameIn, this.passwordIn).subscribe(() => {
      //this.setMessage();
        if (this.authService.isLoggedIn) {
          // Get the redirect URL from our auth service
          // If no redirect has been set, use the default

          let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/app/home';

          // Redirect the user
          this.router.navigate([redirect]);
        } else {
        this.wrongPassword = true;
        }
      });
    }
}

  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }

}
