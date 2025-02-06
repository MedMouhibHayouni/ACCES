import { ContenuComponent } from './../contenu/contenu.component';
import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-page-principal-touts-les-produits',
  imports: [NavbarComponent,ContenuComponent,FooterComponent],
  templateUrl: './page-principal-touts-les-produits.component.html',
  styleUrl: './page-principal-touts-les-produits.component.css'
})
export class PagePrincipalToutsLesProduitsComponent {

}
