// по ананлогии с main.js
import '/scss/pricing.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useSwitcher } from './components/pricing/switcher.js';
import { accordionShow} from './components/pricing/accordion.js';
useTheme();
useBurger();
useSwitcher();
accordionShow()