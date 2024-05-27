import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnNumberComponent } from './btn-number.component';

describe('BtnNumberComponent', () => {
  let component: BtnNumberComponent;
  let fixture: ComponentFixture<BtnNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
