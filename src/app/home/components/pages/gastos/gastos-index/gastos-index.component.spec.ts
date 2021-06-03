import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GastosIndexComponent } from './gastos-index.component';

describe('GastosIndexComponent', () => {
  let component: GastosIndexComponent;
  let fixture: ComponentFixture<GastosIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GastosIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GastosIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
