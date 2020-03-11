import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolhoursComponent } from './schoolhours.component';

describe('SchoolhoursComponent', () => {
  let component: SchoolhoursComponent;
  let fixture: ComponentFixture<SchoolhoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolhoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolhoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
