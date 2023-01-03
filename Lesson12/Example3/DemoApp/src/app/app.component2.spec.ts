import { TestBed} from '@angular/core/testing';
import { AppComponent } from './app.component';

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from './product';
import { Sale } from './sale';
import { By } from '@angular/platform-browser';

import { ProductService } from './product.service';

@Component({selector: 'app-product', template: ''})
class ProductStubComponent {

  @Input()
  product!: Product

  @Output()
  sale: EventEmitter<Sale> = new EventEmitter();
};

describe('AppComponent', () => {

  const spy = jasmine.createSpyObj('ProductService', ['getProducts']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppComponent, ProductStubComponent ],
      providers: [{provide: ProductService, useValue: spy}]
    }).compileComponents();
  });

  it(`should use mock ProductService`, () => {
    
    const dummyProducts = [
      new Product('Prod1', 'Cat1', 111),
      new Product('Prod2', 'Cat2', 222)
    ];
    spy.getProducts.and.returnValue(dummyProducts);

    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    const prods = fixture.debugElement
                         .queryAll(By.css('app-product'));

    expect(prods.length).toBe(2); 
  });
});
