import { FooterComponent } from './../../Accueil/footer/footer.component';
import { SlideProduitsComponent } from './../slide-produits/slide-produits.component';
import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-page-principal-detail-poduit',
  imports: [NavbarComponent,DetailComponent,SlideProduitsComponent,FooterComponent],
  templateUrl: './page-principal-detail-poduit.component.html',
  styleUrl: './page-principal-detail-poduit.component.css',
  standalone: true,
})
export class PagePrincipalDetailPoduitComponent {

}
