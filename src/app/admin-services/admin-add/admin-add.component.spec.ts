import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { AdminAddComponent } from './admin-add.component';

describe('AdminAddComponent', () => {
  let component: AdminAddComponent;
  let fixture: ComponentFixture<AdminAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule,FormsModule, AngularFireModule.initializeApp(environment.firebase), 
        provideFirestore(() => getFirestore()), provideFirebaseApp(() =>initializeApp(environment.firebase)),
        provideAuth(()=>getAuth())],
      declarations: [ AdminAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not allow admin to add book/s if form is empty', () => {
    expect(component.addForm.valid).toBeFalsy();
  });

  // it('should check if input for the "bookid" exists', () => {
  //   let exist = fixture.debugElement.query(
  //     By.css('#bookid')
  //   ).nativeElement;

  //   fixture.detectChanges();
  //   expect(exist.textContent).toContain('Book ID');

  // });

});
