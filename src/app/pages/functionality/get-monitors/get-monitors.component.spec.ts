import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetMonitorsComponent } from './get-monitors.component';

describe('GetMonitorsComponent', () => {
  let component: GetMonitorsComponent;
  let fixture: ComponentFixture<GetMonitorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetMonitorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetMonitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
