import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { LoggedAreaRoutingModule } from './logged-area-routing.module';

import { LoggedAreaComponent } from './logged-area.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { NewTransactionComponent } from './transactions/new-transaction/new-transaction.component';

import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    LoggedAreaComponent,
    TransactionsComponent,
    NewTransactionComponent
  ],
  imports: [
    CommonModule,
    LoggedAreaRoutingModule,
    FormsModule,
    SharedModule,
    MatDialogModule
  ]
})
export class LoggedAreaModule { }