import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable, pipe } from 'rxjs';
import { filter, find, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CRUDAdminService {

  constructor() { }
}
