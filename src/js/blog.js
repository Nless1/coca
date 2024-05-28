import '/scss/blog.scss';

// components
import { scrollWindow } from './components/scroll-header.js';
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useHoverAccordion } from './components/hover-accordion.js';
import { useOurTeamSlider } from './components/about/slider.js';



scrollWindow();
useTheme();
useBurger();
useHoverAccordion();
useOurTeamSlider();