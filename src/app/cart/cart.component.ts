import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';
import { Product } from '../products'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();
  totalAmount = this.cartService.getTotalAmount();
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}
  deleteItem(item: Product) {
    let result = window.confirm(`Estás a punto de eliminar ${item?.name} de tu carrito. Estás seguro?`)
    if(result){
      this.cartService.deleteItem(item);
      this.totalAmount = this.cartService.getTotalAmount()
    };
  }
  onSubmit(): void{
    this.items = this.cartService.clearCart()
    console.warn('Tu pedido ha sido realizado!', this.checkoutForm.value)
    this.checkoutForm.reset()
  }

  ngOnInit() {}
}
