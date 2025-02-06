import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ProduitsSoldesService } from '../../produits-soldes.service';
import { CartService } from '../../cart.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contenu',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './contenu.component.html',
  styleUrl: './contenu.component.css'
})
export class ContenuComponent implements OnInit {

  produits: any[] = [];   
  produitsFiltres: any[] = []; 
  selectedCategories: string[] = []; 
  constructor(
    private produitsSoldesService: ProduitsSoldesService,
    private cartService: CartService,
    private cdr: ChangeDetectorRef 
  ) {}

  ngOnInit(): void {
    this.produitsSoldesService.getProducts().subscribe(
      (data: any) => {
        if (data._embedded && Array.isArray(data._embedded.produits)) {
          this.produits = data._embedded.produits;
          this.produitsFiltres = [...this.produits]; 
        } else {
          this.produits = [];
          this.produitsFiltres = [];
        }
      },
      
    );
  }

  addToCart(produit: any) {
    this.cartService.addToCart(produit);
  }

  toggleCategory(category: string, event: any) {
    const categoryLower = category.toLowerCase(); // توحيد الفئة إلى أحرف صغيرة
  
    if (event.target.checked) {
      if (!this.selectedCategories.includes(categoryLower)) {
        this.selectedCategories.push(categoryLower);
      }
    } else { 
      this.selectedCategories = this.selectedCategories.filter(cat => cat !== categoryLower);
    }
  
    this.filtrerProduits(); 
  }
  



filtrerProduits(): void {
  console.log("📌 الفئات المختارة للتصفية:", this.selectedCategories);

  if (this.selectedCategories.length === 0) {
    this.produitsFiltres = [...this.produits]; // إذا لم يتم تحديد أي فئة، عرض جميع المنتجات
  } else {
    this.produitsFiltres = this.produits.filter(produit =>
      produit.category && this.selectedCategories.some(category => produit.category.toLowerCase().includes(category))
    );
  }

  this.cdr.markForCheck(); 
}

}
