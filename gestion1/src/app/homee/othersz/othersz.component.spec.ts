import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherszComponent } from './othersz.component';

describe('OtherszComponent', () => {
  let component: OtherszComponent;
  let fixture: ComponentFixture<OtherszComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherszComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherszComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
