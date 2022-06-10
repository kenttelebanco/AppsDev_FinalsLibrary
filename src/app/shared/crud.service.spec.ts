import { TestBed } from '@angular/core/testing';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { EMPTY, from } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Books } from './book-mock-data';

import { CRUDService } from './crud.service';

describe('CRUDService', () => {
  let service: CRUDService;
  const data = from(Books);

  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AngularFireModule.initializeApp(environment.firebase), provideFirestore(() => getFirestore()),
      provideFirebaseApp(() =>initializeApp(environment.firebase)),provideAuth(()=>getAuth()),],
    })
    .compileComponents();
  });
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CRUDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get one book', () => {
    let spy = spyOn(service, 'getOneBook').and.returnValue(EMPTY);
    service.getOneBook('1').subscribe();

    expect(spy).toHaveBeenCalledWith('1');
  });
  
});
