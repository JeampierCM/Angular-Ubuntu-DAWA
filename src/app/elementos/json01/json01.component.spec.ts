import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Json01Component } from './json01.component';

describe('Json01Component', () => {
  let component: Json01Component;
  let fixture: ComponentFixture<Json01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Json01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Json01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
