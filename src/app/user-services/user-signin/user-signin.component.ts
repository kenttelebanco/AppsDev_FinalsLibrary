import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/models/auth.interface';
import { User } from 'src/app/models/user';
import { FirebaseService } from 'src/app/services/firebase.service';


@Component({
  selector: 'user-signin',
  templateUrl: './user-signin.component.html',
  styleUrls: ['./user-signin.component.css'],
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
      if(result.data == null){
        this.router.navigate(['/user-signin']);
        alert("Invalid Email or Password. Try Again.")}
      else
        this.router.navigate(['/app-user']);

      this.isSignedIn = result!.success;
      if(this.isSignedIn){
       
        (await this.fireB.logUser(result.data!.id)).subscribe((user)=>{
          console.log(this.fireB.currentUser);
          this.fireB.updateUser(user!)
          
        });
      }
    })
  }
}
