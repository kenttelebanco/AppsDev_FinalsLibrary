import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { RegisterComponent } from './register/register.component';
import { UserBorrowComponent } from './user-services/user-borrow/user-borrow.component';
import { UserComponent } from './user/user.component';
import { UserSigninComponent } from './user-services/user-signin/user-signin.component';
import { AdminComponent } from './admin/admin.component';
import { AdminSigninComponent } from './admin-services/admin-signin/admin-signin.component';
import { AdminRegisterComponent } from './admin-services/admin-register/admin-register.component';



const routes: Routes = [
{path: '', redirectTo: 'homescreen', pathMatch: 'full' },
{path: 'homescreen', component:HomescreenComponent},
{path: 'app-register', component: RegisterComponent},

//FOR USER
{path: 'app-user', component: UserComponent},
{path: 'user-borrow', component: UserBorrowComponent},
{path: 'user-signin', component: UserSigninComponent},

//FOR ADMIN
{path: 'app-admin', component: AdminComponent},
{path: 'admin-signin', component: AdminSigninComponent},
{path: 'admin-register', component: AdminRegisterComponent},





];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }
