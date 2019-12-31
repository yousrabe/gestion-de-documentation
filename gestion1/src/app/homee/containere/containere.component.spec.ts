import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainereComponent } from './containere.component';

describe('ContainereComponent', () => {
  let component: ContainereComponent;
  let fixture: ComponentFixture<ContainereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
