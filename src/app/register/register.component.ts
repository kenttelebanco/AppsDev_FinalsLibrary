import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserRegister } from 'src/app/models/auth.interface';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isSignedIn = false
  role = 'user';
  userRegister = {} as UserRegister;

  regform= this.fb.group({
    email:['', [Validators.required, Validators.email]],
    password:['', Validators.required],
    fname:[' ', Validators.required],
  })
  

  constructor(private fb: FormBuilder, private fireB: FirebaseService) { }

  
  ngOnInit(): void {
  }

  



  async onRegister(email:string, password:string, fname:string){
    this.userRegister.name = fname;
    this.userRegister.email = email;
    this.userRegister.password = password; 
    this.userRegister.role = this.role;
    var output = await this.fireB.register(this.userRegister);
    console.log(output);
    this.isSignedIn = output.success;
  }
}
