import { Component, OnInit } from '@angular/core';
import { CRUDService } from 'src/app/shared/crud.service';

@Component({
  selector: 'app-borrow-card',
  templateUrl: './borrow-card.component.html',
  styleUrls: ['./borrow-card.component.css']
})
export class BorrowCardComponent implements OnInit {

  constructor(private crud: CRUDService) { }

  ngOnInit(): void {
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
}
