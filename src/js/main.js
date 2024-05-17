import '../assets/scss/main.scss';

// components
import { scrollWindow } from './components/scroll-header.js';
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useInsightSlider, usePartnersMobileSlider, } from './components/slider.js';

scrollWindow();
useTheme();
useBurger();
useInsightSlider();
usePartnersMobileSlider();