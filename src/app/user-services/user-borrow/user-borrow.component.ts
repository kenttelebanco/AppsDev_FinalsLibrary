import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'user-borrow',
  templateUrl: './user-borrow.component.html',
  styleUrls: ['./user-borrow.component.css']
})
export class UserBorrowComponent implements OnInit {

  constructor(private fb: FormBuilder) {}
  
  ngOnInit(): void {
  }

}
