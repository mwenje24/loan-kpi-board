import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BranchComponent } from './components/branch/branch.component';
import { CustomerComponent } from './components/customer/customer.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { LoansComponent } from './components/loans/loans.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashBoardComponent},
  {path: 'branches', component: BranchComponent},
  {path: 'loans', component: LoansComponent},
  {path: 'customers', component: CustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
