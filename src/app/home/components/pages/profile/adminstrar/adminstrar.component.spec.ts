import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminstrarComponent } from './adminstrar.component';

describe('AdminstrarComponent', () => {
  let component: AdminstrarComponent;
  let fixture: ComponentFixture<AdminstrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminstrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminstrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
