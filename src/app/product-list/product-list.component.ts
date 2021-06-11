import { Component, OnInit } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  ngOnInit(){
    console.log()
  }
  share() {
    window.alert('El teléfono ha sido compartido!');
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
}

}

