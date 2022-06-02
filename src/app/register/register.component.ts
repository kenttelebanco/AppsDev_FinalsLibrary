import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserRegister } from 'src/app/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isSignedIn = false
  userRegister = {} as UserRegister;

  regform= this.fb.group({
    email:['', [Validators.required, Validators.email]],
    password:['', Validators.required],
    fname:[' ', Validators.required],
  })
  

  constructor(private fb: FormBuilder) { }

  
  ngOnInit(): void {
  }

  register(){
    console.log("Register!");
    this.userRegister.name = this.regform.controls['fname'].value;
    this.userRegister.email = this.regform.controls['email'].value;
    this.userRegister.password = this.regform.controls['password'].value;
  }



  async onRegister(email:string, password:string, fname:string){
    this.isSignedIn = true
  }
}
