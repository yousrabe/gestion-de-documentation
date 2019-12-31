import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackupeComponent } from './backupe.component';

describe('BackupeComponent', () => {
  let component: BackupeComponent;
  let fixture: ComponentFixture<BackupeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackupeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
