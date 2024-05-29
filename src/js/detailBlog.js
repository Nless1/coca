import '/scss/detailBlog.scss';

// components
import { scrollWindow } from './components/scroll-header.js';
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useHoverAccordion } from './components/hover-accordion.js';



scrollWindow();
useTheme();
useBurger();
useHoverAccordion();