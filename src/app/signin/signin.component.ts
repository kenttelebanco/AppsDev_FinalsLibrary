import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UserLogin } from '../models/user.model';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  isSignedIn = false;
  userLogin = {} as UserLogin;

  signinform= this.fb.group({
    email:['', [Validators.required, Validators.email]],
    password:['', Validators.required],
    checkbox:[false, Validators.requiredTrue],
  })
  

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  signIn(){
    console.log("Sign in!");
    this.userLogin.email = this.signinform.controls['email'].value;
    this.userLogin.password = this.signinform.controls['password'].value;
  }

  async onSignin(email:string, password:string){
    this.isSignedIn = true
  }
}
