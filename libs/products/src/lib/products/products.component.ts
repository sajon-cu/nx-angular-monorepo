import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from '@angular-monorepo/orders';

@Component({
  selector: 'lib-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {}
