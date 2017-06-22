import Vue, { ComponentOptions } from 'vue';

import projectData, { Project, ProjectDetail } from '../../project-data';

interface ProjectPage extends Vue {
  project: Project;
  detailed: ProjectDetail;
  idx: number;
}

export default {
  name: 'project',
  data() {
    return {
      project: { details: [] },
      detailed: { },
      idx: 0
    } as ProjectPage;
  },
  created() {
    this.project = projectData.find(a => a.name === this.$route.params.id) || null;
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
      (this.$refs[ref] as any).open();
    },
    closeDialog(ref) {
      (this.$refs[ref] as any).close();
    },
    onOpen() {

    },
    onClose(type) {
      this.detailed = { } as any;
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
      return '/assets/gfx/projects/' + name + '.png';
    },
    getDetailImageSrc: function(detailImage) { if(!detailImage) return '';
      return this.project ? '/assets/gfx/projects/' + this.project.name + '/' + detailImage : '';
    }
  }
} as ComponentOptions<ProjectPage>;
