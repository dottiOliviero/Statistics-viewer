import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { listaUtenti } from '../utils/listaUtenti';

@Injectable()
export class AuthService {
  isLoggedIn = false;
  wrongPassword = false;
  wrongUser = false;
  userIn = '';

  devmode = true;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(usernameIn: string, passwordIn: string): Observable<boolean> {
    if (this.devmode) {
    return of(true).pipe(
      delay(10),
      tap(val => this.isLoggedIn = true)
    );
    }
  for ( let utente of listaUtenti) {
      if (utente.user.toUpperCase() === usernameIn.toUpperCase() ) {
        if (utente.password === passwordIn) {
        this.userIn = usernameIn;
        return of(true).pipe(
          delay(100),
          tap(val => this.isLoggedIn = true)
        );
        } else {
         this.wrongPassword = true;
         return of(false).pipe(
         delay(10),
         tap(val => this.isLoggedIn = false)
         );
      }
    } else {
    this.wrongUser = true;
    this.wrongPassword = true;
    return of(false).pipe(
    delay(10),
    tap(val => this.isLoggedIn = false)
    );
    }
  }
}

  logout(): void {
    this.isLoggedIn = false;
  }
}
