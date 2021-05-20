import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GananciasIndexComponent } from './ganancias-index.component';

describe('GananciasIndexComponent', () => {
  let component: GananciasIndexComponent;
  let fixture: ComponentFixture<GananciasIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GananciasIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GananciasIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
