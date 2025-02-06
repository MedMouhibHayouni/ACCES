import { FooterComponent } from '../footer/footer.component';
import { LoginComponent } from './../login/login.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-page-client',
  imports: [LoginComponent,FooterComponent,],
  templateUrl: './page-client.component.html',
  styleUrl: './page-client.component.css'
})
export class PageClientComponent {

}
