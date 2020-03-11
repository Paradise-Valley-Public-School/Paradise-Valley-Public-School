import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolrulesComponent } from './schoolrules.component';

describe('SchoolrulesComponent', () => {
  let component: SchoolrulesComponent;
  let fixture: ComponentFixture<SchoolrulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolrulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolrulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
