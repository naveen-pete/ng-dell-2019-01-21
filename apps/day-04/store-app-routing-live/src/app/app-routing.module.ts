import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductFormComponent } from './products/product-form/product-form.component';

import { CustomersComponent } from './customers/customers.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },             // http://localhost:4200/
  { path: 'products', component: ProductsComponent, children: [
    { path: ':id', component: ProductDetailComponent }, // http://localhost:4200/products/1
    { path: ':id/edit', component: ProductFormComponent }, // http://localhost:4200/products/1/edit
  ] }, // http://localhost:4200/products
  { path: 'customers', component: CustomersComponent }, // http://localhost:4200/customers
  // { path: '**', component: NotFoundComponent }
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
