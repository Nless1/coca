import '/scss/main.scss';

// components
import { scrollWindow } from './components/scroll-header.js';
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useInsightSlider, usePartnersMobileSlider, useTestimonialsSlider } from './components/slider.js';
import { useHoverAccordion } from './components/hover-accordion.js';

scrollWindow();
useTheme();
useBurger();
useInsightSlider();
usePartnersMobileSlider();
useTestimonialsSlider();
useHoverAccordion();