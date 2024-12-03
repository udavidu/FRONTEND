import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetProjectorsComponent } from './get-projectors.component';

describe('GetProjectorsComponent', () => {
  let component: GetProjectorsComponent;
  let fixture: ComponentFixture<GetProjectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetProjectorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetProjectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
