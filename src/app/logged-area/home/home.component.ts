import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { finalize, take } from 'rxjs/operators';
import { User } from 'src/app/shared/interfaces/user.interface';
import { AuthService } from 'src/app/shared/services/auth.service';

import { DashboardResponse } from './home.interface';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'] 
})
export class HomeComponent implements OnInit {

  user: User | undefined;
  dashboard: DashboardResponse | undefined;

  inicio = '2021-01-01';
  fim = '2021-02-01';

  estaCarregando = false;
  erro = false;

  constructor(
    private authService: AuthService,
    private homeService: HomeService,
  ) { }

  ngOnInit() {
    this.user = this.authService.getUser();
    this.getDashboard();
  }

  getDashboard() {
    this.estaCarregando = true;
    this.erro = false;
    this.homeService.getDashboard(this.inicio, this.fim)
      .pipe(
        take(1),
        finalize(() => this.estaCarregando = false)
      )
      .subscribe(
        response => this.onSucess(response),
        error => this.onError(error),
      );
  }

  onSucess(response: DashboardResponse) {
    this.dashboard = response;
    console.log('Sucess', response);
  }

  onError(error: HttpErrorResponse) {
    this.erro = true;
    console.log('Error', error);
  }

  getBordaCardCss(saldo: number) {
    return {
      'border-sucess': saldo > 0,
      'border-danger': saldo < 0
    }
  }

  getTextSaldoCss(saldo: number) {
    return {
      'text-sucess': saldo > 0,
      'text-danger': saldo < 0
    }
  }

}
