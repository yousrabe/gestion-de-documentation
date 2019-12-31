import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectiondbComponent } from './connectiondb.component';

describe('ConnectiondbComponent', () => {
  let component: ConnectiondbComponent;
  let fixture: ComponentFixture<ConnectiondbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectiondbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectiondbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
