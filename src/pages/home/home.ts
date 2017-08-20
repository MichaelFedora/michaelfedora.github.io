import Vue, { ComponentOptions } from 'vue';

import projectData from '../../project-data';
import clientProjectData from '../../client-project-data';

interface HomePage extends Vue {
  projects: typeof projectData;
  featuredProjects: typeof projectData;
}

export default {
  name: 'home',
  data() {
    return {
      projects: projectData,
      clientProjects: clientProjectData,
    };
  },
  computed: {
    featuredProjects(dis: HomePage) {
      return dis.projects.filter(a => a.featured || false);
    }
  },
  methods: {
    getImageSrc: function (name) {
      return 'assets/gfx/projects/' + name + '.png';
    },
  }
} as ComponentOptions<HomePage>;
