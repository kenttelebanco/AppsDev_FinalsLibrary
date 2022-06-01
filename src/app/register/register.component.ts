import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isSignedIn = false

  regform= this.fb.group({
    email:['', [Validators.required, Validators.email]],
    password:['', Validators.required],
    fname:[' ', Validators.required],
  })
  

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  async onRegister(email:string, password:string, fname:string){
    this.isSignedIn = true
  }
}
