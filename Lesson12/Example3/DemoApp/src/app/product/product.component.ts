import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../product';
import { Sale } from '../sale';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() 
  product!: Product;

  @Output() 
  sale: EventEmitter<Sale> = new EventEmitter();

  clicked() {
    let eventData: Sale = {
      productDescription: this.product.description,
      quantity: 1
    };
    this.sale.emit(eventData);
  }
}
