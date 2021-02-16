import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedAreaComponent } from './logged-area.component';
import { NewTransactionComponent } from './transactions/new-transaction/new-transaction.component';
import { TransactionsComponent } from './transactions/transactions.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }, {
        path: '',
        component: LoggedAreaComponent,
        children: [
            {
                path: 'home',
                loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
            },
            { path: 'transactions', component: TransactionsComponent },
            { path: 'newTransactions', component: NewTransactionComponent }
        ]
    }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoggedAreaRoutingModule { }