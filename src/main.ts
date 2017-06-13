import Vue, { ComponentOptions } from 'vue';

import './theme';

import './main.css';
import './styles.css';

import router from './router';

console.log('Environment:', process.env.NODE_ENV);

const v = new Vue({
  router,
  el: '#main'
} as ComponentOptions<Vue>)
