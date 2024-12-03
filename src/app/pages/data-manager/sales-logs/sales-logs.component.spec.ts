import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesLogsComponent } from './sales-logs.component';

describe('SalesLogsComponent', () => {
  let component: SalesLogsComponent;
  let fixture: ComponentFixture<SalesLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesLogsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
