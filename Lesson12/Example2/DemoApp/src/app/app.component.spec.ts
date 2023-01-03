import { TestBed} from '@angular/core/testing';
import { AppComponent } from './app.component';

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from './product';
import { Sale } from './sale';
import { By } from '@angular/platform-browser';

@Component({selector: 'app-product', template: ''})
class ProductStubComponent {

  @Input()
  product!: Product

  @Output()
  sale: EventEmitter<Sale> = new EventEmitter();
};

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ProductStubComponent
      ],
    }).compileComponents();
  });

  it(`should have correct number of ProductComponent children`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    let productComponentTags = fixture.debugElement
                                      .queryAll(By.css('app-product'));

    expect(productComponentTags.length).toBe(3); 

  });
});
