import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css'],
  standalone: true,
  imports: []
})
export class SlideComponent implements AfterViewInit {
  ngAfterViewInit(): void {
   
    // Initialisation de Swiper avec la configuration de pagination
    new Swiper('.mySwiper', {
      pagination: {
        el: '.swiper-pagination', // Élément pour la pagination
        dynamicBullets: true,
        clickable: true,          // Rendre la pagination interactive
      },
      autoplay:{
        delay: 1000,
      },
      loop: true,
    });
  }
}




//import { AfterViewInit, Component, ElementRef } from '@angular/core';

// Importer jQuery 
// declare var $: any;

// @Component({
 // selector: 'app-slide',
 // templateUrl: './slide.component.html',
 // styleUrls: ['./slide.component.css']
// })
// export class SlideComponent implements AfterViewInit {

 // constructor(private el: ElementRef) {}

 // ngAfterViewInit(): void {
  //  this.initOwlCarousel();
 // }

 // private initOwlCarousel(): void {
 //   $('#amine').owlCarousel({
  //    loop: true,
   //   margin: 0,
   //   nav: true,
   //   navText: [
   //     '<i class="bi bi-arrow-left"></i>',
    //    '<i class="bi bi-arrow-right"></i>'
   //   ],
    //  items: 1,
   //   smartSpeed: 1000,
  //    responsive: {
    //    0: { items: 1 },
     //   600: { items: 1 },
    //    1000: { items: 1 }
   //   }
 //   });
 // }
// }
