import { TestBed } from '@angular/core/testing';

import { NgxTableCraftService } from './ngx-table-craft.service';

describe('NgxTableCraftService', () => {
  let service: NgxTableCraftService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxTableCraftService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
