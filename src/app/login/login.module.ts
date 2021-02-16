import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { LoginRoutingModule } from './login-routing.module';

import { LoginComponent } from './login.component';
import { RegisterComponent } from '../register/register.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,    
    LoginRoutingModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    SharedModule
  ]
})
export class LoginModule { }