import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CRUDService } from 'src/app/shared/crud.service';

@Component({
  selector: 'user-borrow',
  templateUrl: './user-borrow.component.html',
  styleUrls: ['./user-borrow.component.css']
})
export class UserBorrowComponent implements OnInit {

  bookusers$: any[]= [];
  editing = false;
 

  constructor(private fb: FormBuilder, private crud: CRUDService) {
  }
  
  ngOnInit(): void {
    this.crud.getBooks().subscribe((val) => {
      console.log(val)
      this.bookusers$ = val
    });
  }

  
  //Can only borrow 5 books - already set on services
  borrowBook(userID: string, bookID: string) {
    return this.crud.borrowBook(userID, bookID);
      // Returns ex. {success: true, data: 'Book status changed - Borrowed"}
  }
  returnBook(userID: string, bookID: string) {
    return this.crud.returnBook(userID, bookID);
      // Returns ex. {success: true, data: 'Book status changed - AVAILABLE"}
  }

  onCancelBooks(value: any) {
    this.editing = value;
  }
}
