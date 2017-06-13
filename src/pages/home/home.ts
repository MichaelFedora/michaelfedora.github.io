import Vue, { ComponentOptions } from 'vue';

import './home.css';

import projectData from '../../project-data';

interface HomePage extends Vue {
  projects: typeof projectData;
  featuredProjects: typeof projectData;
}

export default {
  name: 'home',
  template: '@@import home.html',
  data() {
    return {
      projects: projectData
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