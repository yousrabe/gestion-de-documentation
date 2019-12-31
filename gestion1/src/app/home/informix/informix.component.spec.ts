import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformixComponent } from './informix.component';

describe('InformixComponent', () => {
  let component: InformixComponent;
  let fixture: ComponentFixture<InformixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
