import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  imports: [
    FormsModule
  ],
  templateUrl: './edit-product.component.html'
})
export class EditProductComponent implements OnInit {
  product: Product = {
    name: '',
    description: '',
    price: 0,
    stock: 0,
    imageUrl: ''
  };

  constructor(private route: ActivatedRoute, private service: ProductService, private router: Router) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.service.getById(id).subscribe((data: Product) => this.product = data);
  }

  update() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.service.update(id, this.product).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
