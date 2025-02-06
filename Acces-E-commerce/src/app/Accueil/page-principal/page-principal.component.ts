import { FooterComponent } from './../footer/footer.component';
import { Component } from '@angular/core';
import { SlideComponent } from '../slide/slide.component';
import { Slide2Component } from '../slide2/slide2.component';
import { ProduitsSoldesComponent } from '../produits-soldes/produits-soldes.component';
import { ProduitsBioComponent } from '../produits-bio/produits-bio.component';
import { SildeProduitsBioComponent } from '../silde-produits-bio/silde-produits-bio.component';
import { NotreHistoireComponent } from '../notre-histoire/notre-histoire.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { AvantLeFooterComponent } from '../avant-le-footer/avant-le-footer.component';

@Component({
  selector: 'app-page-principal',
  templateUrl: './page-principal.component.html',
  styleUrls: ['./page-principal.component.css'],
  standalone: true, // Indique que c'est un composant autonome
  imports: [
    NavbarComponent,
    SlideComponent,
    Slide2Component,
    ProduitsSoldesComponent,
    ProduitsBioComponent,
    SildeProduitsBioComponent,
    NotreHistoireComponent,
    AvantLeFooterComponent,
    FooterComponent
  ],
})
export class PagePrincipalComponent {}
