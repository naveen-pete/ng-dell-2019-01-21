import { Component, OnInit, Input, OnDestroy } from '@angular/core';

import { Product } from '../models/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  @Input() product: Product = new Product();
  subscription: any;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.subscription = this.productsService.productCreated.subscribe(
      (product) => {
        console.log('productCreated event handled by product detail component');
        console.log(product);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
