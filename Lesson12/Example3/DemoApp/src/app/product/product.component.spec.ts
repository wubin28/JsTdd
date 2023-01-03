import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductComponent } from './product.component';

import { Product } from '../product';
import { Sale } from '../sale';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
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

    product = new Product('Bose sound system', 'TV/Audio', 450);
		component.product = product;
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
