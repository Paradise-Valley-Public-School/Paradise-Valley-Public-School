import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutparadiseComponent } from './aboutparadise.component';

describe('AboutparadiseComponent', () => {
  let component: AboutparadiseComponent;
  let fixture: ComponentFixture<AboutparadiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutparadiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutparadiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
