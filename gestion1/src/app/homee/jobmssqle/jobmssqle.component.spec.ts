import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobmssqleComponent } from './jobmssqle.component';

describe('JobmssqleComponent', () => {
  let component: JobmssqleComponent;
  let fixture: ComponentFixture<JobmssqleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobmssqleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobmssqleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
