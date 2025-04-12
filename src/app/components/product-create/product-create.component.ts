import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  imports: [
    FormsModule
  ],
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {
  product: Product = {
    name: '',
    description: '',
    price: 0,
    stock: 0,
    imageUrl: ''
  };

  constructor(private productService: ProductService, private router: Router) {}

  save(): void {
    this.productService.create(this.product).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
