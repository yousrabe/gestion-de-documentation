import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeeComponent } from './changee.component';

describe('ChangeeComponent', () => {
  let component: ChangeeComponent;
  let fixture: ComponentFixture<ChangeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
