import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTelevisionsComponent } from './get-televisions.component';

describe('GetTelevisionsComponent', () => {
  let component: GetTelevisionsComponent;
  let fixture: ComponentFixture<GetTelevisionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetTelevisionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetTelevisionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
