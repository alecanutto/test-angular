import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { AuthService } from '../shared/services/auth.service';
import { LoginCredenciais, LoginResponse } from './login.interface';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  readonly APIUrl = environment.API_URL;

  constructor(
    private authService: AuthService,
    private http: HttpClient) { }

  signin(credenciais: LoginCredenciais): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.APIUrl + 'login', credenciais)
    .pipe(
      tap(response => {
        this.authService.setUser(response.usuario);
        this.authService.setToken(response.token);
      })
    );          
  }

}
