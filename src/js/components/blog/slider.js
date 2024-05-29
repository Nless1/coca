import Swiper from 'swiper';
import { Navigation} from 'swiper/modules';
import 'swiper/css';

export const useHeroSlider = () => {
  new Swiper('.hero__slider', {
    modules: [Navigation],
    slidesPerView: '1',
    spaceBetween: 32,
    loop: true,
    navigation: {
      prevEl: '.hero__btn--prev',
      nextEl: '.hero__btn--next',
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

export const useArticlesSlider = () => {
  new Swiper('.articles__slider', {
    modules: [Navigation],
    slidesPerView: '1',
    spaceBetween: 32,
    loop: true,
    navigation: {
      prevEl: '.articles__btn--prev',
      nextEl: '.articles__btn--next',
    },
    breakpoints: {
      380: {
    slidesPerView: '1.4',
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