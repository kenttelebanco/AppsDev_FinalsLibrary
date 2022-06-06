import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { docData } from '@angular/fire/firestore';
import { BehaviorSubject, filter, map, Observable } from 'rxjs';
import { CRUDReturn } from '../models/crud_return.interface';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private usersCollection : AngularFirestoreCollection<User>
  loggedUser = {} as User

  private source = new BehaviorSubject<User>(this.loggedUser);
  currentUser = this.source.asObservable();

  user$!: Observable<User[]>
  signedIn: boolean = false;
  constructor(private afDb: AngularFirestore) { 
    this.usersCollection = afDb.collection<User>('users');
    this.user$ = this.usersCollection.valueChanges();
  }

  async register(payload: any): Promise<CRUDReturn>{
    try{
      payload.key = this.afDb.createId();
      this.usersCollection.doc(payload.key).set(payload);
      return {
        success: true,
        data: payload,
      };
    }catch(error){
      console.log(error);
      return {success: false, data: error};
    }

  } 

  async signIn(payload: any) {
     return this.user$.pipe(map((doc) =>{
      {
        let fl = doc.filter((user)=>{
          return user.email === payload.email;
        });
        
        return fl[0].password == payload.password ? {success: true, data: fl[0]} : {success: true, data: null}
        // return fl.length > 0 ? fl[0] : null;
      }
     }))
  }

  async logUser(id: string){
    return this.user$.pipe(map((doc) =>{
      {
        let fl = doc.filter((user)=>{
          return user.id === id;
        });
        
        return fl.length > 0 ? fl[0] : null;
        // return fl.length > 0 ? fl[0] : null;
      }
     }))
  }

  async updateUser(user: User){
    this.source.next(user);
  }

  
}