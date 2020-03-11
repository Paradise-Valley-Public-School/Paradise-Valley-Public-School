import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorsMessageComponent } from './directors-message.component';

describe('DirectorsMessageComponent', () => {
  let component: DirectorsMessageComponent;
  let fixture: ComponentFixture<DirectorsMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectorsMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorsMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
