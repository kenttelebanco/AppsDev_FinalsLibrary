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

    (await this.fireB.signIn(this.userLogin)).subscribe(async (result) => {
      console.log(result);
      
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
