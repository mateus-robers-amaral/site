import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.scss']
})
export class CarouselComponent {
  slides = [
    { img: 'https://images.unsplash.com/photo-1621378864046-0122e4a415a5?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D://via.placeholder.com/600x300?text=Slide+1' },
    { img: 'https://via.placeholder.https://images.unsplash.com/photo-1621378864046-0122e4a415a5?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D://via.placeholder.com/600x300?text=Slide+1/600x300?text=Slide+2' },
    { img: 'https://via.https://images.unsplash.com/photo-1621378864046-0122e4a415a5?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D://via.placeholder.com/600x300?text=Slide+1.com/600x300?text=Slide+3' }
  ];

  customOptions: OwlOptions = {
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: true,
    nav: true,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1 
      },
      1000: {
        items: 3
      }
    }
  };
  
}
