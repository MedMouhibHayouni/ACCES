import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ProduitsSoldesService } from '../../produits-soldes.service';
import { CartService } from '../../cart.service';
import Swiper from 'swiper';

@Component({
  selector: 'app-slide-produits',
  imports: [CommonModule],
  templateUrl: './slide-produits.component.html',
  styleUrl: './slide-produits.component.css'
})
export class SlideProduitsComponent implements OnInit, AfterViewInit{
  produits: any[] = [];

  constructor(
    private produitsSoldesService: ProduitsSoldesService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
      this.produitsSoldesService.getProducts().subscribe((data: any[]) => {
      this.produits = data;
    });
  }

  ngAfterViewInit(): void {
    new Swiper('.carts-produits-solde', {
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
        dynamicBullets: true,
      },
      slidesPerView: 3,
      autoplay: {
        delay: 1000,
      },
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
    addToCart(produit: any) {
      this.cartService.addToCart(produit);
    }
  
}
