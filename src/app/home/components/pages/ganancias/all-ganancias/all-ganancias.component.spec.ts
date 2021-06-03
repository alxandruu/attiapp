import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllGananciasComponent } from './all-ganancias.component';

describe('AllGananciasComponent', () => {
  let component: AllGananciasComponent;
  let fixture: ComponentFixture<AllGananciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllGananciasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllGananciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
