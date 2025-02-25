import { Component, Input } from '@angular/core';
import { Product } from '../../Interfaces/product.interface';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [NgIf],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  @Input() product!: Product;
}