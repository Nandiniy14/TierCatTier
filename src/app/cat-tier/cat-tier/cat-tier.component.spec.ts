import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatTierComponent } from './cat-tier.component';

describe('CatTierComponent', () => {
  let component: CatTierComponent;
  let fixture: ComponentFixture<CatTierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatTierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatTierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
