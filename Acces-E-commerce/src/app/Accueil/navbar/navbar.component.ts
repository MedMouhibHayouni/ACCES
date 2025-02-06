import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { CartService } from '../../cart.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';  



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
  imports: [CommonModule,RouterModule]
})
export class NavbarComponent {
  
  @ViewChild('cart') cart!: ElementRef;    
  cartItems: any[] = [];     

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe((items) => {
      this.cartItems = items; 
    });
  }

  openCart() {
    this.cart.nativeElement.classList.add('active');
  }

  closeCart() {
    this.cart.nativeElement.classList.remove('active');
  }

  removeItem(index: number) {
    this.cartService.removeFromCart(index);
  }

   getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.prix,0);
  }


}


