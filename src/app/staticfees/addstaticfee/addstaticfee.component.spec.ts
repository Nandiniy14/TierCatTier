import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstaticfeeComponent } from './addstaticfee.component';

describe('AddstaticfeeComponent', () => {
  let component: AddstaticfeeComponent;
  let fixture: ComponentFixture<AddstaticfeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddstaticfeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddstaticfeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
