import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiskspaceeComponent } from './diskspacee.component';

describe('DiskspaceeComponent', () => {
  let component: DiskspaceeComponent;
  let fixture: ComponentFixture<DiskspaceeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiskspaceeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiskspaceeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
