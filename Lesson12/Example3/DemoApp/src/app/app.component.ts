import { Component } from '@angular/core';

import { Product } from './product';
import { Sale } from './sale';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  products: Array<Product> = []; 
  sales: Array<string> = [];

  constructor(productService: ProductService) { 
    this.products = productService.getProducts();
  }

  saleHandler(event: Sale) {
    const msg = `${event.productDescription} [${event.quantity}]`;
    this.sales.push(msg);
  }
}
