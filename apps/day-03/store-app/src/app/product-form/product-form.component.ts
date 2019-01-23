import { Component, OnInit } from '@angular/core';

import { Product } from '../models/product';
import { LoggerService } from '../services/logger.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product = new Product();
  showMessage = false;
  // loggerService: LoggerService;

  constructor(
    private loggerService: LoggerService,
    private productsService: ProductsService
  ) {
    // this.loggerService = loggerService;
  }

  ngOnInit() { }

  onSubmit() {
    this.loggerService.log('Product form submitted.');

    this.productsService.addProduct(this.product);

    this.product = new Product();

    this.showMessage = true;

    // const obj = this;

    setTimeout(() => {
      // obj.showMessage = false;
      this.showMessage = false;
    }, 4000);
  }

}
