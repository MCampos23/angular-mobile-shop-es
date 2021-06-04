import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service'


@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  shippingCosts = this.cartService.getShippingPrices()
  selectedShippingType:number = 0

  radioChangeHandler(event: any){
    return this.selectedShippingType = event.target.value
  }
  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

}