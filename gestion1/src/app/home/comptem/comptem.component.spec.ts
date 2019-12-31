import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptemComponent } from './comptem.component';

describe('ComptemComponent', () => {
  let component: ComptemComponent;
  let fixture: ComponentFixture<ComptemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComptemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComptemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
