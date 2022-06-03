import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserLogin } from '../models/auth.interface';
import { User } from '../models/user';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  isSignedIn = false;
  userLogin = {} as UserLogin;
  data = {} as User;
  signinform = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    checkbox: [false, Validators.requiredTrue],
  })


  constructor(private fb: FormBuilder, private fireB: FirebaseService) { }

  ngOnInit(): void {
  }



  async onSignin(email: string, password: string) {
    this.userLogin.email = email;
    this.userLogin.password = password;

    (await this.fireB.signIn(this.userLogin)).subscribe((user) => {
      if (user?.password == password) {
        
        this.isSignedIn = true;
        this.data = user;
        console.log({success: true, data: this.data})
      }
      else {
        
        this.isSignedIn = false;
        console.log('I am here now sad', this.isSignedIn)
      }
    })
  }
}
