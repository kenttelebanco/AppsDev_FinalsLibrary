import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReturnComponent } from './user-return.component';

describe('UserReturnComponent', () => {
  let component: UserReturnComponent;
  let fixture: ComponentFixture<UserReturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserReturnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
