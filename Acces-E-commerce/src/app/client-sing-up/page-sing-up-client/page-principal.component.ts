import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { SingUpComponent } from '../sing-up/sing-up.component';

@Component({
  selector: 'app-page-principal',
  imports: [FooterComponent,SingUpComponent],
  templateUrl: './page-principal.component.html',
  styleUrl: './page-principal.component.css'
})
export class pageSingUpClient {

}
