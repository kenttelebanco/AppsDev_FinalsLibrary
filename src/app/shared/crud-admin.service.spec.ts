import { TestBed } from '@angular/core/testing';

import { CRUDAdminService } from './crud-admin.service';

describe('CRUDAdminService', () => {
  let service: CRUDAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CRUDAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
