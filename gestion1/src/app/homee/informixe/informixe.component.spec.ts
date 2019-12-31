import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformixeComponent } from './informixe.component';

describe('InformixeComponent', () => {
  let component: InformixeComponent;
  let fixture: ComponentFixture<InformixeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformixeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformixeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
