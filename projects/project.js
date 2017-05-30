Vue.use(VueMaterial);

Vue.material.registerTheme({
  default: {
    primary: 'white',
    accent: 'blue',
    warn: 'deep-orange',
    background: 'white'
  }
});

var projectName;
(function() {
  const pathname = window.location.pathname;
  const match = /\/([^/]+?)$/.exec(pathname)
  projectName = match ? match[1] : '';
})();

new Vue({
  el: '#app',
  data: {
    project: projectName ? My.Projects.find(function (a) { return a.name === projectName; }) : null,
    detailed: { },
    idx: 0
  },
  methods: {
    humanizeURL: function (url) {
      return url
      .replace(/^https?:\/\//, '')
      .replace(/\/$/, '')
    },
    openDialog(ref, idx) {
      this.detailed = this.project.details[idx];
      this.idx = idx;
      this.$refs[ref].open();
    },
    closeDialog(ref) {
      this.$refs[ref].close();
    },
    onOpen() {
      console.log('Opened');
    },
    onClose(type) {
      console.log('Closed', type);
      this.detailed = { };
      this.idx = 0;
    },
    prevDetail: function() {
      this.idx--;
      this.detailed = this.project.details[this.idx];
    },
    nextDetail: function() {
      this.idx++;
      this.detailed = this.project.details[this.idx];
    },
    getImageSrc: function (name) {
      return "/gfx/projects/" + name + '.png';
    },
    getDetailImageSrc: function(detailImage) { if(!detailImage) return '';
      return this.project ? '/gfx/projects/' + this.project.name + '/' + detailImage : '';
    }
  }
})
