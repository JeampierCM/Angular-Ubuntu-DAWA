import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Json02Component } from './json02.component';

describe('Json02Component', () => {
  let component: Json02Component;
  let fixture: ComponentFixture<Json02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Json02Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Json02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
