import { Component } from '@angular/core';

import { Product } from './product';
import { Sale } from './sale';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  products: Array<Product> = []; 
  sales: Array<string> = [];

  constructor() { 
    this.products = [
      new Product('65 inch UHDTV', 'TV/Audio', 1800),
      new Product('Carving skis', 'Sports equipment', 350),
      new Product('Ski boots', 'Sports equipment', 150)
    ];
  }

  saleHandler(event: Sale) {
    const msg = `${event.productDescription} [${event.quantity}]`;
    this.sales.push(msg);
  }
}
