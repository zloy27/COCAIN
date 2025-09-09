import '/scss/about.scss';

// components
import { coverSwiper,ourTeamSwiper,CoverButtonIndent,OurTeamButtonIndent } from './components/team/swiper';
import { useBurger } from './components/burger';
import {useTheme } from './components/theme';
coverSwiper();
ourTeamSwiper();
CoverButtonIndent();
OurTeamButtonIndent();
useBurger();
useTheme();

