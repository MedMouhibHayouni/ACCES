import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root', 
})
export class CartService {

  
  private cartItems = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItems.asObservable();

  addToCart(item: any) {
    const currentItems = this.cartItems.value;
    this.cartItems.next([...currentItems, item]);
  }

  removeFromCart(index: number) {
    const currentItems = this.cartItems.value;
    currentItems.splice(index, 1);
    this.cartItems.next([...currentItems]);
  }

  clearCart() {
    this.cartItems.next([]);
  }
}
 