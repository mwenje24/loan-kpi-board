import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { BranchComponent } from './components/branch/branch.component';
import { LoansComponent } from './components/loans/loans.component';
import { CustomerComponent } from './components/customer/customer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BodyComponent } from './components/body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    DashBoardComponent,
    BranchComponent,
    LoansComponent,
    CustomerComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
