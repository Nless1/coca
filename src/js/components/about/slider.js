import Swiper from 'swiper';
import { Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';

export const useOurTeamSlider = () => {
  new Swiper('.our-team__slider', {
    modules: [Navigation, Pagination],
    slidesPerView: '1',
    spaceBetween: 32,
    loop: true,
    navigation: {
      prevEl: '.our-team__btn--prev',
      nextEl: '.our-team__btn--next',
    },
    pagination: {
      el: ".our-team__pagination",
      clickable: true,
    },
    breakpoints: {
      380: {
    slidesPerView: '1.5',
      },
      576: {
    slidesPerView: '2',
      },
      768: {
    slidesPerView: '3',
      },
    },
  });
};