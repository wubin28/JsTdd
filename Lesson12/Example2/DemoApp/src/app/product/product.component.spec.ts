import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductComponent } from './product.component';

import { Product } from '../product';
import { Sale } from '../sale';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

	// Declare a Product variable, ready to pass into a ProductComponent.
  let product: Product;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;

		// Mock the product supplied by the parent component.
		product = new Product('Bose sound system', 'TV/Audio', 450);
		
		// Simulate the parent setting the input property with that product.
		component.product = product;

		// Trigger initial data binding.
    fixture.detectChanges();
  });

  it('should render product details', () => {

    const componentElem: HTMLElement = fixture.nativeElement;
    const divChildren = componentElem.querySelectorAll('.product > *');
    console.log(divChildren[0]);

    expect(divChildren[0]?.textContent).toMatch('Bose sound system');
    expect(divChildren[1]?.textContent).toMatch('TV/Audio');
    expect(divChildren[2]?.textContent).toMatch('450');
  });

	it('should emit a sale event when button clicked', () => {
	
    let saleEmitted! : Sale;
    component.sale.subscribe((sale: Sale) => saleEmitted = sale);

    const componentElem: HTMLElement = fixture.nativeElement;
    const button = componentElem.querySelector('button');
    button?.click();
    expect(saleEmitted?.productDescription).toBe('Bose sound system');
    expect(saleEmitted?.quantity).toBe(1);
  });  
});
