import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistadadoComponent } from './vistadado.component';

describe('VistadadoComponent', () => {
  let component: VistadadoComponent;
  let fixture: ComponentFixture<VistadadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistadadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistadadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
