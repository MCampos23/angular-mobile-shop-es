import { Injectable } from '@angular/core';
import { products } from './products';


@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  excerpt:string =""
  createExcerpt(){
    
    return this.excerpt.valueOf()
  }
  constructor() { }
}
