import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginResponse } from './login.interface';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  hide = true;
  isLoading: boolean = false;
  errorLogin: boolean = false;

  formlogin = new FormGroup({
    usuario: new FormControl(),
    senha: new FormControl()
  });

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  onSubmit() {
    this.errorLogin = false;
    
    if (!this.formlogin.valid) {
      this.formlogin.controls.usuario.markAsTouched();
      this.formlogin.controls.senha.markAsTouched();

      if (this.formlogin.controls.usuario.invalid) {
        this.formlogin.value.usuario?.nativeElement.focus();
      }

      if (this.formlogin.controls.senha.invalid) {
        this.formlogin.value.senha?.nativeElement.focus();
      }

      return;
    }

    this.signin();
  }

  showError(controlName: string) {
    if (!this.formlogin.controls[controlName]) {
      return false;
    }
    return this.formlogin.controls[controlName].invalid && this.formlogin.controls[controlName].touched;
  }

  signin() {
    this.isLoading = true;

    this.loginService.signin(this.formlogin.value).subscribe(
      response => this.onSuccessLogin(response),
      error => this.onErrorLogin(error)
    );
  }

  onSuccessLogin(response: LoginResponse) {
    console.log(response);    
    this.router.navigate(['home']);
  }

  onErrorLogin(error: any) {
    console.log(error);
    this.errorLogin = true;
    this.isLoading = false;
  }

}