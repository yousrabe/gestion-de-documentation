import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrororaComponent } from './errorora.component';

describe('ErrororaComponent', () => {
  let component: ErrororaComponent;
  let fixture: ComponentFixture<ErrororaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrororaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrororaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
