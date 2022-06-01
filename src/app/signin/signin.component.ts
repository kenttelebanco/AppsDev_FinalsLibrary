import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  isSignedIn = false;

  signinform= this.fb.group({
    email:['', [Validators.required, Validators.email]],
    password:['', Validators.required],
    checkbox:[false, Validators.requiredTrue],
  })
  

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  async onSignin(email:string, password:string){
    this.isSignedIn = true
  }
}
