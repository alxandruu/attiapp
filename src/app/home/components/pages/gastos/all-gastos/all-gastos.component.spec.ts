import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllGastosComponent } from './all-gastos.component';

describe('AllGastosComponent', () => {
  let component: AllGastosComponent;
  let fixture: ComponentFixture<AllGastosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllGastosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllGastosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
