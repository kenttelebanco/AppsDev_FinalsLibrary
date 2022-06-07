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
  display = "";
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(public fireB: FirebaseService) { this.fireB.currentUser.subscribe((user)=>{
    console.log(user);
    this.display = user.fname;
  })    
  }

  ngOnInit(): void {  
  }

  ngOnChanges(): void {
    this.fireB.currentUser.subscribe((user)=>{
      console.log(user);
      this.data = user;
    })
  }
}
