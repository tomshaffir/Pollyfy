import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpirationAllComponent } from './expiration-all.component';

describe('ExpirationAllComponent', () => {
  let component: ExpirationAllComponent;
  let fixture: ComponentFixture<ExpirationAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpirationAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpirationAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
