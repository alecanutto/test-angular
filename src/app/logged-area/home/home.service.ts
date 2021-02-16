

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { environment } from 'src/environments/environment';
import { DashboardResponse } from './home.interface';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  API_URL = environment.API_URL;

  constructor(private http: HttpClient,
    private authService: AuthService,
  ) { }

  getDashboard(inicio: string, fim: string) :Observable<DashboardResponse> {
    return this.http.get<DashboardResponse>(this.API_URL + '/dashboard',
      {
        headers: {
          'Authorization': this.authService.getToken()!,
        },
        params: {
          login: this.authService.getUser()!.login,
          inicio,
          fim
        }
      });
  }


}
