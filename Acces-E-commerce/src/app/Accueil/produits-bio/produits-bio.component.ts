import { Component } from '@angular/core';
import { CartService } from '../../cart.service';
import { ProduitsSoldesService } from '../../produits-soldes.service';
import Swiper from 'swiper';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-produits-bio',
  imports: [CommonModule, RouterModule],
  templateUrl: './produits-bio.component.html',
  styleUrls: ['./produits-bio.component.css']
})
export class ProduitsBioComponent {

  produits: any[] = [];

  constructor(
    private produitsSoldesService: ProduitsSoldesService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.produitsSoldesService.getProducts().subscribe(
      (data: any) => {
        console.log('Données reçues:', data);
        if (data._embedded && Array.isArray(data._embedded.produits)) {
          // Filtrer les produits pour garder uniquement ceux avec la catégorie "bio"
          this.produits = data._embedded.produits.filter((produit: any) => 
            produit.category.toLowerCase() === 'bio'
          );
        } else {
          this.produits = [];
        }
      },
      (error) => {
        console.error('Erreur lors du chargement des produits:', error);
      }
    );
  }

  ngAfterViewInit(): void {
    new Swiper('.carts-produits-bio', {
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
        dynamicBullets: true,
      },
      slidesPerView: 3,
      spaceBetween: 10,
      autoplay: {
        delay: 5000,
      },
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
