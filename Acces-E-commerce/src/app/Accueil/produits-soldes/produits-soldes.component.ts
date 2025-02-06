import { Component, OnInit, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import { ProduitsSoldesService } from '../../produits-soldes.service';
import { CartService } from '../../cart.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-produits-soldes',
  templateUrl: './produits-soldes.component.html',
  styleUrls: ['./produits-soldes.component.css'],
  standalone: true,
  imports: [CommonModule,RouterModule]
})
export class ProduitsSoldesComponent implements OnInit, AfterViewInit {
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
          this.produits = data._embedded.produits.filter((produit: any) => 
            produit.old_price && produit.old_price > produit.prix
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
    new Swiper('.carts-produits-solde', {
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
        dynamicBullets: true,
      },
      slidesPerView: 4,
      spaceBetween:10,
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
