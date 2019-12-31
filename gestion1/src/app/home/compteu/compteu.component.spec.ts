import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteuComponent } from './compteu.component';

describe('CompteuComponent', () => {
  let component: CompteuComponent;
  let fixture: ComponentFixture<CompteuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompteuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
