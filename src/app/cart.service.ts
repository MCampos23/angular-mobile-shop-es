import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product } from './products'



@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = []
  deleteItem(item: Product){
    let i = this.items.indexOf(item)
    this.items.splice(i, 1)
  }
  addToCart(product: Product){
    this.items.push(product)
  }
  getItems(){
    return this.items
  }
  clearCart(){
    this.items = []
    return this.items
  }
  getShippingPrices(){
    return this.http.get<{type: string, price: number}[]> ('/assets/shipping.json')
  }
  getTotalAmount(){
    let total:number = 0
    this.items.forEach(item=> total+=item.price)
    return total.toFixed(2)
  }
  getItemsLength(){
    return this.items.length
  }
  
  constructor(
    private http: HttpClient
  ) {}
}
