import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticfeesComponent } from './staticfees.component';

describe('StaticfeesComponent', () => {
  let component: StaticfeesComponent;
  let fixture: ComponentFixture<StaticfeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticfeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticfeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
