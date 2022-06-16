import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  data = {} as User | null;
  display:any;

  constructor(public fireB: FirebaseService) { 
    this.fireB.currentAdmin.subscribe((user)=>{
    console.log(user);
    this.data = user;
    this.display = this.fireB.displayName;
  })    
  }

  ngOnInit(): void {  
  }

  ngOnChanges(): void {
    this.fireB.currentAdmin.subscribe((user)=>{
      console.log(user);
      this.data = user;
    })
  }
}
