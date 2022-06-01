import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { UserBorrowComponent } from './user-services/user-borrow/user-borrow.component';
import { UserComponent } from './user/user.component';



const routes: Routes = [
{path: '', redirectTo: 'homescreen', pathMatch: 'full' },
{path: 'reg', redirectTo: ' /app-register', pathMatch: 'full'},
{path: 'sign', redirectTo: ' /app-signin', pathMatch: 'full'},
{path: 'user', redirectTo: ' /app-user', pathMatch: 'full'},
{path: 'ub', redirectTo: ' /user-borrow', pathMatch: 'full'},

{path: 'homescreen', component:HomescreenComponent},
{path: 'app-register', component: RegisterComponent},
{path: 'app-signin', component: SigninComponent},
{path: 'app-user', component: UserComponent},
{path: 'user-borrow', component: UserBorrowComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }
