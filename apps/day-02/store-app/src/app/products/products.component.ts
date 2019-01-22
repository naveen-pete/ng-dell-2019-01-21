import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  productId: number = 1;
  productName: string = 'Dell Latitude';
  productDescription: string = 'Best for business use';
  productPrice: number = 45000;
  productIsAvailable: boolean = false;
}
