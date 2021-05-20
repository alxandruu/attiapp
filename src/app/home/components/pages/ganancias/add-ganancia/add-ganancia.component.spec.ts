import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGananciaComponent } from './add-ganancia.component';

describe('AddGananciaComponent', () => {
  let component: AddGananciaComponent;
  let fixture: ComponentFixture<AddGananciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGananciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGananciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
