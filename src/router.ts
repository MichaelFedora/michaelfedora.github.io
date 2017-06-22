import Vue from 'vue';
import VueRouter from 'vue-router';

import HomePage from './pages/home/home';
import ProjectPage from './pages/project/project';
import NotFoundPage from './pages/not-found/not-found';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'hash', // process.env.NODE_ENV === 'production' ? 'history' : 'hash',
  routes: [
    { path: '', component: HomePage },

    { path: '/projects/:id', component: ProjectPage },

    { path: '**', component: NotFoundPage }
  ]
});
