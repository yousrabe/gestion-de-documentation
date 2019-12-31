import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobmssqlComponent } from './jobmssql.component';

describe('JobmssqlComponent', () => {
  let component: JobmssqlComponent;
  let fixture: ComponentFixture<JobmssqlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobmssqlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobmssqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
