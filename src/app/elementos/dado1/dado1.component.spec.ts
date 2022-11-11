import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dado1Component } from './dado1.component';

describe('Dado1Component', () => {
  let component: Dado1Component;
  let fixture: ComponentFixture<Dado1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dado1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dado1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
