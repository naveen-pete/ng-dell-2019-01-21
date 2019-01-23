import { Injectable } from '@angular/core';

import { Product } from '../models/product';

@Injectable()
export class ProductsService {
  private products: Product[] = [
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

  getProducts(): Product[] {
    console.log('ProductsService.getProducts() invoked.');
    return this.products;
  }

  addProduct(product: Product) {
    console.log('ProductsService.addProduct() invoked.');
    this.products.unshift(product);
  }

}

// {
//   providedIn: 'root'
// }
