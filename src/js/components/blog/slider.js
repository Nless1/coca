import Swiper from 'swiper';
import { Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';

export const useHeroSlider = () => {
  new Swiper('.hero__slider', {
    modules: [Navigation, Pagination],
    slidesPerView: '1',
    spaceBetween: 32,
    loop: true,
    navigation: {
      prevEl: '.hero__btn--prev',
      nextEl: '.hero__btn--next',
    },
    pagination: {
      el: ".hero__pagination",
      clickable: true,
    },
    breakpoints: {
      380: {
    slidesPerView: '1.2',
      },
      576: {
    slidesPerView: '2',
      },
      768: {
    slidesPerView: '2.5',
      },
      950: {
    slidesPerView: '3',
      },
      1441: {
    slidesPerView: 'auto',
      }
    },
  });
};