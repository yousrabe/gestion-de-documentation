import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceeComponent } from './performancee.component';

describe('PerformanceeComponent', () => {
  let component: PerformanceeComponent;
  let fixture: ComponentFixture<PerformanceeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformanceeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
