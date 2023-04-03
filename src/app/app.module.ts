import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatDialogModule} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { BranchComponent } from './components/branch/branch.component';
import { LoansComponent } from './components/loans/loans.component';
import { CustomerComponent } from './components/customer/customer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BodyComponent } from './components/body/body.component';
import { TitleHeadComponent } from './components/title-head/title-head.component';
import { NewBranchFormComponent } from './components/new-branch-form/new-branch-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    DashBoardComponent,
    BranchComponent,
    LoansComponent,
    CustomerComponent,
    BodyComponent,
    TitleHeadComponent,
    NewBranchFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FontAwesomeModule, MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
