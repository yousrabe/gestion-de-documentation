import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MysqleComponent } from './mysqle.component';

describe('MysqleComponent', () => {
  let component: MysqleComponent;
  let fixture: ComponentFixture<MysqleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MysqleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MysqleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
