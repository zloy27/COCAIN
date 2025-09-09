import '/scss/blog.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { tabsBlog } from './components/blog/tabs.js';
import { tabsInfoSwiper, articlesSwiper,tabsInfoButtonsIndent } from './components/blog/swiper.js';
tabsBlog();
useTheme();
useBurger();
tabsInfoSwiper();
articlesSwiper();
tabsInfoButtonsIndent();