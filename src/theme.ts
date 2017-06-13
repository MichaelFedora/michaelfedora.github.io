import Vue from 'vue';
import VueMaterial from 'vue-material';

import 'vue-material/dist/vue-material.css';

Vue.use(VueMaterial);

export default (Vue as any).material.registerTheme({
 default: {
    primary: 'white',
    accent: 'blue',
    warn: 'deep-orange',
    background: 'white'
  }
});
