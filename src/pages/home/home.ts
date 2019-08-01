import Vue, { ComponentOptions } from 'vue';

import projectData from '../../project-data';
import clientProjectData from '../../client-project-data';

export default Vue.component('home', {
  name: 'home',
  data() {
    return {
      tab: null,
      projects: projectData,
      clientProjects: clientProjectData,
      featuredProjects: projectData.filter(a => a.featured || false)
    };
  },
  mounted() {
    setTimeout(() => {
      this.tab = 'tabs-featured';
    }, 500);
  },
  methods: {
    getImageSrc: function (name) {
      return 'assets/gfx/projects/' + name + '.png';
    },
  }
});
