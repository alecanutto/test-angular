import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class IsNotLoggedGuard implements CanActivate {
  
  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  canActivate(): boolean {
    const isLogged = this.authService.isConnected();

    if (!isLogged) {
      return true;
    }

    this.router.navigate(['home']);
    return false;
  }
  
}
