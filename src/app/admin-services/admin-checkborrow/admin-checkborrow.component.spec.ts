import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCheckborrowComponent } from './admin-checkborrow.component';

describe('AdminCheckborrowComponent', () => {
  let component: AdminCheckborrowComponent;
  let fixture: ComponentFixture<AdminCheckborrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCheckborrowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCheckborrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
