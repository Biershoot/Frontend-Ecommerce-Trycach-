import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  imports: [
    FormsModule
  ]
})
export class ProductFormComponent implements OnInit {
  product: Product = { name: '', description: '', price: 0 };
  isEdit = false;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.productService.getProduct(+id).subscribe((data) => {
        this.product = data;
      });
    }
  }

  onSubmit() {
    if (this.isEdit) {
      this.productService.updateProduct(this.product.id!, this.product).subscribe(() => {
        this.router.navigate(['/']);
      });
    } else {
      this.productService.createProduct(this.product).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}

