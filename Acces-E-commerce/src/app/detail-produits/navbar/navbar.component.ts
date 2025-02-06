import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { CartService } from '../../cart.service'; // استيراد الخدمة
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  standalone: true,
    
})
export class NavbarComponent {
   @ViewChild('cart') cart!: ElementRef; // للتحكم في العنصر
    cartItems: any[] = []; // المنتجات الموجودة في السلة
  
    constructor(private cartService: CartService) {}
  
    ngOnInit(): void {
      // الاشتراك في السلة لمتابعة التغييرات
      this.cartService.cartItems$.subscribe((items) => {
        this.cartItems = items; // تحديث المنتجات
      });
    }
  
    // فتح السلة
    openCart() {
      this.cart.nativeElement.classList.add('active');
    }
  
    // غلق السلة
    closeCart() {
      this.cart.nativeElement.classList.remove('active');
    }
  
    // حذف منتج من السلة
    removeItem(index: number) {
      this.cartService.removeFromCart(index);
    }
  
     // حساب المجموع الكلي
     getTotalPrice(): number {
      return this.cartItems.reduce((total, item) => total + item.price,0);
    }

}
