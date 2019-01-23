import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  @Output() productCreated = new EventEmitter<Product>();
  product = new Product();
  showMessage = false;

  constructor() { }

  ngOnInit() { }

  onSubmit() {
    this.productCreated.emit(this.product);
    this.product = new Product();

    this.showMessage = true;

    // const obj = this;

    setTimeout(() => {
      // obj.showMessage = false;
      this.showMessage = false;
    }, 4000);
  }

}
