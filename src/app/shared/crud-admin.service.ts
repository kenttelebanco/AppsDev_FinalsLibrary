import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable, pipe } from 'rxjs';
import { filter, find, map, tap } from 'rxjs/operators';
import { Book } from '../models/books/book';
import { CRUDReturn } from '../models/crud_return.interface';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class CRUDAdminService {
  private booksCollection: AngularFirestoreCollection<Book>;
  private usersCollection: AngularFirestoreCollection<User>;
  books$!: Observable<Book[]>;
  users$!: Observable<User[]>;

  constructor(private afDb: AngularFirestore) {
    this.booksCollection = this.afDb.collection<Book>('books');
    this.usersCollection = this.afDb.collection<User>('users');
    this.books$ = this.booksCollection.valueChanges();
  }

  //User Borrwed Books
  getUserBorrowedBooks(userID: string): Observable<CRUDReturn> {
    return this.users$.pipe(
      map((Obs) => {
        {
          let fl = Obs.filter((user) => {
            return user.id === userID;
          });
          return fl.length > 0
            ? { success: true, data: {username: fl[0].fname, books: fl[0].BRWD_books} }
            : { success: false, data: null };
        }
      })
    );
  }

  //BOOKS
  addBook(book: Book) {
    book.id = this.afDb.createId();
    this.booksCollection.doc(book.id).set(book);
  }

  getBooks() {
    return this.books$;
  }

  getOneBook(bookID: string) {
    return this.booksCollection.doc(bookID).get();
  }

  getOneBookFromObservable(id: string) {
    return this.books$.pipe(
      map((Obs) => {
        {
          let fl = Obs.filter((book) => {
            return book.id === id;
          });
          return fl.length > 0
            ? { success: true, data: fl[0] }
            : { success: false, data: null };
        }
      })
    );
  }

  removeBook(bookID: string) {
    this.booksCollection.doc(bookID).delete();
  }
}
