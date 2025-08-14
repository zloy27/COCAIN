import '/scss/main.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import {
    sliderFirst,
    sliderSecond,
    feedbackSwiper,
} from './components/slider.js';
sliderSecond();
sliderFirst();
useTheme();
useBurger();
feedbackSwiper();
