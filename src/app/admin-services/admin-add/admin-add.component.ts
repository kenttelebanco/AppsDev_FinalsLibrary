import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Book } from 'src/app/models/books/book';
import { CRUDService } from 'src/app/shared/crud.service';
@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.css']
})
export class AdminAddComponent implements OnInit {
  today: number = Date.now();
  book = {} as Book;
  addForm = this.fb.group({
    bookid: ['', Validators.required],
    title: ['', Validators.required],
    author: ['', Validators.required],
    published: ['', Validators.required],
    status: ['', Validators.required],
  });


  constructor(private fb: FormBuilder, private crud: CRUDService) {
    setInterval(() => {this.today = Date.now()}, 1);
   }

  ngOnInit(): void {
  }

  addBook(bookid: string, title: string, author: string, published: string, status: string){
    this.book.id = bookid;
    this.book.name = title;
    this.book.author = author;
    this.book.published = published;
    this.book.status = status.toUpperCase();

    this.crud.addBook(this.book);
  }

  removeBook(bookid:string){
    return this.crud.removeBook(bookid);
  }

  getUserBRW(userid: string){
    return this.crud.getUserBorrowedBooks(userid)
  }

  getBRW(){
    return this.crud.getBorrowedBooks();
  }

}
