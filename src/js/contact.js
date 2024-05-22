import '/scss/contact.scss';

// components
import { scrollWindow } from './components/scroll-header.js';
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useInsightSlider, usePartnersMobileSlider, useTestimonialsSlider } from './components/slider.js';
import { useHoverAccordion } from './components/hover-accordion.js';
import { usePhone } from './components/contact/phone.js';


scrollWindow();
useTheme();
useBurger();
useInsightSlider();
usePartnersMobileSlider();
useTestimonialsSlider();
useHoverAccordion();
usePhone();