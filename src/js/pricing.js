import '/scss/pricing.scss';

// components
import { scrollWindow } from './components/scroll-header.js';
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useHoverAccordion } from './components/hover-accordion.js';
import { usePriceSwitcher } from './components/pricing/priceSwticher.js';


scrollWindow();
useTheme();
useBurger();
useHoverAccordion();
usePriceSwitcher();
