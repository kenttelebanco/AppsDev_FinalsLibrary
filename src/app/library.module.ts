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
import { UsernavComponent } from './nav/usernav/usernav.component';
import { UserSigninComponent } from './user-services/user-signin/user-signin.component';
import { AuthenticationService } from './services/authentication.service';
import { AdminComponent } from './admin/admin.component';
import { AdminSigninComponent } from './admin-services/admin-signin/admin-signin.component';
import { AdminRegisterComponent } from './admin-services/admin-register/admin-register.component';


@NgModule({
  declarations: [
      HomescreenComponent,
      HeadnavComponent,
      FooternavComponent,
      RegisterComponent,
      

      //FOR USERS
      UserComponent,
      UsernavComponent,
      UserSigninComponent,
      UserBorrowComponent,
      BorrowCardComponent,

      //FOR ADMIN
      AdminComponent,
      AdminSigninComponent,
      AdminRegisterComponent,
  ],
  imports: [
    CommonModule,
    LibraryRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  
  ],
  exports: [],
  providers:[AuthenticationService]

})
export class LibraryModule { }
