import { Component, OnInit } from '@angular/core';
import Swiper, { Navigation } from 'swiper';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  categoriaSeleccionada: string = 'categorias'; // Agrega la propiedad categoriaSeleccionada


  ngOnInit() {
    Swiper.use([Navigation]);
    this.initSwiper();
  }

  private initSwiper() {
    setTimeout(() => {
      const swiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        slidesPerView: 'auto',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        autoplay: {
          delay: 3000,
        },
      });

      swiper.on('init', () => {
        console.log('Swiper initialized');
      });

      swiper.on('slideChange', () => {
        console.log('Slide changed');
      });

      swiper.on('click', () => {
        console.log('Navigation button clicked');
      });
    }, 0);
  }
}
