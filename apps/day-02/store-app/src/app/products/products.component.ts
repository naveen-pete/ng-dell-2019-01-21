import { Component, OnInit } from '@angular/core';
import { ConsoleReporter } from 'jasmine';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productName: string = 'Dell Latitude';

  constructor() { }

  ngOnInit() {
  }

  onSave() {
    console.log('Save button clicked');
  }
}
