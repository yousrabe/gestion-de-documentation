import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerforamanceComponent } from './perforamance.component';

describe('PerforamanceComponent', () => {
  let component: PerforamanceComponent;
  let fixture: ComponentFixture<PerforamanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerforamanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerforamanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
