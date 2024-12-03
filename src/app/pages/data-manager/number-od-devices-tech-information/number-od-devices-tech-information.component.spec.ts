import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberOdDevicesTechInformationComponent } from './number-od-devices-tech-information.component';

describe('NumberOdDevicesTechInformationComponent', () => {
  let component: NumberOdDevicesTechInformationComponent;
  let fixture: ComponentFixture<NumberOdDevicesTechInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberOdDevicesTechInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberOdDevicesTechInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
