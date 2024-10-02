import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTableCraft } from './ngx-table-craft.component';

describe('NgxTableCraft', () => {
  let component: NgxTableCraft;
  let fixture: ComponentFixture<NgxTableCraft>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxTableCraft]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxTableCraft);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
