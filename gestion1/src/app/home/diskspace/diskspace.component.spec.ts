import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiskspaceComponent } from './diskspace.component';

describe('DiskspaceComponent', () => {
  let component: DiskspaceComponent;
  let fixture: ComponentFixture<DiskspaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiskspaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiskspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
