import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberOdDevicesComponent } from './number-od-devices.component';

describe('NumberOdDevicesComponent', () => {
  let component: NumberOdDevicesComponent;
  let fixture: ComponentFixture<NumberOdDevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberOdDevicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberOdDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
