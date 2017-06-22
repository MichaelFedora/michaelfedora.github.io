import Vue, { ComponentOptions } from 'vue';

import './theme';

import './styles.scss';

import router from './router';

import AppComponent from './app/app';

console.log('Environment:', process.env.NODE_ENV);

const v = new Vue({
  router,
  el: '#app',
  components: { AppComponent },
  render: h => h(AppComponent)
} as ComponentOptions<Vue>)
