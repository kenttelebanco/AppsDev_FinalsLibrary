import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { LibraryRoutingModule } from './library.routing.module';
import { UserComponent } from './user/user.component';
import { UserBorrowComponent } from './user-services/user-borrow/user-borrow.component';
import { BorrowCardComponent } from './user-services/user-borrow/borrow-card/borrow-card.component';
import { HeadnavComponent } from './nav/headnav/headnav.component';
import { FooternavComponent } from './nav/footernav/footernav.component';
import { SigninComponent } from './signin/signin.component';
import { UsernavComponent } from './nav/usernav/usernav.component';



@NgModule({
  declarations: [
      HomescreenComponent,
      HeadnavComponent,
      FooternavComponent,
      RegisterComponent,
      SigninComponent,
      UserComponent,
      UsernavComponent,
      UserBorrowComponent,
      BorrowCardComponent,
  ],
  imports: [
    CommonModule,
    LibraryRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: []

})
export class LibraryModule { }
