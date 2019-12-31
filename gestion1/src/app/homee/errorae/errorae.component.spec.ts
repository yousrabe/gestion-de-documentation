import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErroraeComponent } from './errorae.component';

describe('ErroraeComponent', () => {
  let component: ErroraeComponent;
  let fixture: ComponentFixture<ErroraeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErroraeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErroraeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
