import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.css']
})
export class AdminAddComponent implements OnInit {
  today: number = Date.now();

  addForm = this.fb.group({
    bookid: ['', Validators.required],
    title: ['', Validators.required],
    author: ['', Validators.required],
    published: ['', Validators.required],
    status: ['', Validators.required],
  });


  constructor(private fb: FormBuilder) {
    setInterval(() => {this.today = Date.now()}, 1);
   }
  ngOnInit(): void {
  }

}
