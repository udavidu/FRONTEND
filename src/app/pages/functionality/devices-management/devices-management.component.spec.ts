import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicesManagementComponent } from './devices-management.component';

describe('DevicesManagementComponent', () => {
  let component: DevicesManagementComponent;
  let fixture: ComponentFixture<DevicesManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevicesManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevicesManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
