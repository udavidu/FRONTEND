import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComparisionComponent } from './product-comparision.component';

describe('ProductComparisionComponent', () => {
  let component: ProductComparisionComponent;
  let fixture: ComponentFixture<ProductComparisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductComparisionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductComparisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
