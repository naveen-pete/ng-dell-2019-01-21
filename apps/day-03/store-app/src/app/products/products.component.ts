import { Component } from '@angular/core';

import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  showMessage: boolean = false;
  product: Product = new Product();

  products: Product[] = [
    {
      id: 1,
      name: 'Dell Latitude',
      description: 'Best for business use',
      price: 45000,
      isAvailable: false
    },
    {
      id: 2,
      name: 'Dell XPS',
      description: 'Premium laptop',
      price: 95000,
      isAvailable: true
    },
    {
      id: 3,
      name: 'Dell Inspiron',
      description: 'Best for home use',
      price: 60000,
      isAvailable: true
    }
  ];

  onSubmit() {
    console.log('form submitted');
    console.log(this.product);
    this.products.unshift(this.product);
    this.product = new Product();

    this.showMessage = true;
  }
}
