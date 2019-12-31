import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectiondbeComponent } from './connectiondbe.component';

describe('ConnectiondbeComponent', () => {
  let component: ConnectiondbeComponent;
  let fixture: ComponentFixture<ConnectiondbeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectiondbeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectiondbeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
