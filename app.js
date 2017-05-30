Vue.use(VueMaterial);

Vue.material.registerTheme({
  default: {
    primary: 'white',
    accent: 'blue',
    warn: 'deep-orange',
    background: 'white'
  }
});

new Vue({
  el: '#app',
  data: {
    featuredProjects: My.Projects.filter(function (a) { return a.featured || false; }),
    projects: My.Projects,
  },
  methods: {
    humanizeURL: function (url) {
      return url
      .replace(/^https?:\/\//, '')
      .replace(/\/$/, '')
    },
    getImageSrc: function (name) {
      return "/gfx/projects/" + name + '.png';
    },
  }
})
