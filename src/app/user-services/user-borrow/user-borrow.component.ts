import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'user-borrow',
  templateUrl: './user-borrow.component.html',
  styleUrls: ['./user-borrow.component.css']
})
export class UserBorrowComponent implements OnInit {

  form = this.fb.group({
    $key: [''],
    destination: ['', Validators.required],
    origin: ['', Validators.required],
  });

  bookusers$: any[]= [];
  editing = false;
  editingIndex!: number;

  constructor(private fb: FormBuilder) {}
  
  ngOnInit(): void {
  }

  onEdit(index: any) {
    this.editing = true;
    this.editingIndex = index;
  }

  editComplete(value: any) {
    this.editing = value;
    this.editingIndex = 0;
  }

  onCancelFlight(value: any) {
    this.editing = value;
  }

  get f() {
    return this.form.controls;
  }

}
