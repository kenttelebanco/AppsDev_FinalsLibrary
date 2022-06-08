import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/models/auth.interface';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { HotToastService} from '@ngneat/hot-toast';
import { authState } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Component({
  selector: 'user-signin',
  templateUrl: './user-signin.component.html',
  styleUrls: ['./user-signin.component.css'],
  providers: [AuthenticationService]
})
export class UserSigninComponent implements OnInit {

  isSignedIn = false;
  userLogin = {} as UserLogin;
  data = {} as User;
  
  signinform = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  })

  constructor(private fb: FormBuilder, private fireB: FirebaseService, private router: Router) { }

  ngOnInit(): void {
  }

  async onSignin(email: string, password: string) {
    this.userLogin.email = email;
    this.userLogin.password = password;

    (await this.fireB.signInUser(this.userLogin)).subscribe(async (result) => {
      console.log(result);
      this.fireB.displayName = result.data?.fname
      this.router.navigate(['/app-user']);
    })
  }

  getUserLoggedInStatus() {
    //console.log('returning' + this.loggedInUser);
    this.fireB.currentUser.subscribe((user)=>{
    console.log(user.fname + "here");
    return user.fname    
  })
    }

}
