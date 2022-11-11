import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonvistaComponent } from './jsonvista.component';

describe('JsonvistaComponent', () => {
  let component: JsonvistaComponent;
  let fixture: ComponentFixture<JsonvistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonvistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonvistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
