import Vue from 'vue';

import projectData, { Project, ProjectDetail } from '../../project-data';

export default Vue.component('project', {
  data() {
    return {
      active: false,
      project: null as Project,
      idx: 0
    };
  },
  computed: {
    detailed(): ProjectDetail {
      return (this.project && this.project.details[this.idx]) || { };
    }
  },
  mounted() {
    this.project = projectData.find(a => a.name === this.$route.params.id) || null;
  },
  methods: {
    humanizeURL(url: string) {
      return url
      .replace(/^https?:\/\//, '')
      .replace(/\/$/, '')
    },
    openDialog(idx: number) {
      this.idx = idx;
      this.active = true;
    },
    onClose() {
      this.idx = 0;
    },
    prevDetail() {
      this.idx--;
    },
    nextDetail() {
      this.idx++;
    },
    getImageSrc(name: string) {
      return '/assets/gfx/projects/' + name + '.png';
    },
    getDetailImageSrc(detailImage: string) {
      if(!detailImage) return '';
      return this.project ? '/assets/gfx/projects/' + this.project.name + '/' + detailImage : '';
    }
  }
});
