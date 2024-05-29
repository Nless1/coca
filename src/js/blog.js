import '/scss/blog.scss';

// components
import { scrollWindow } from './components/scroll-header.js';
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useHoverAccordion } from './components/hover-accordion.js';
import { useHeroSlider } from './components/blog/slider.js';
import { useArticlesSlider } from './components/blog/slider.js';



scrollWindow();
useTheme();
useBurger();
useHoverAccordion();
useHeroSlider();
useArticlesSlider();