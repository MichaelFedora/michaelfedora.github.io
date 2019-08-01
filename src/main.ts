import Vue, { ComponentOptions } from 'vue';
import { MdCard, MdTabs, MdList, MdToolbar, MdButton, MdAvatar, MdIcon, MdDialog } from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css';

import './styles.scss';

import router from './router';

import AppComponent from './app/app';

console.log('Environment:', process.env.NODE_ENV);

Vue.use(MdCard);
Vue.use(MdTabs);
Vue.use(MdList);
Vue.use(MdToolbar);
Vue.use(MdButton);
Vue.use(MdAvatar);
Vue.use(MdIcon);
Vue.use(MdDialog);

const v = new Vue({
  router,
  el: '#app',
  components: { AppComponent },
  render: h => h(AppComponent, { key: 'app' })
} as ComponentOptions<Vue>)
