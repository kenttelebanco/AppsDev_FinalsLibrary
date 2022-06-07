import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-usernav',
  templateUrl: './usernav.component.html',
  styleUrls: ['./usernav.component.css']
})
export class UsernavComponent implements OnInit {
  data = {} as User | null;
  display:any;

  constructor(public fireB: FirebaseService) { 
    this.fireB.currentUser.subscribe((user)=>{
    console.log(user);
    this.data = user;

    this.display = this.fireB.displayName;
  })  
  }
  ngOnInit(): void {
  }

}
