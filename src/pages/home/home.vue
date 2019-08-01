<template>
<div id='home'>
  <md-card id='intro'>
    <md-card-header>
      <div class='md-title'>Hello there!</div>
    </md-card-header>
    <md-card-content>
      <p>I'm Michael Fedora, a self-taught coder, artist, and inventor. Welcome to my home!</p>
      <p>I work with a fairly wide range of technologies, including
        <a href='https://vuejs.org/' class='vue'>Vue</a>,
        <a href='https://ionic.io/' class='ionic'>Ionic</a>,
        <a href='https://nodejs.org' class='nodejs'>Node.js</a>,
        <a href='https://expressjs.com/' class='express'>Express</a>
        and <a href='https://rethinkdb.com' class='rethinkdb'>RethinkDB</a>.
        My favorite versioning system is <a href='https://git-scm.com/' class='git'>Git</a>,
        and my favorite environment is Win10 with
        <a href='https://code.visualstudio.com' class='code'>VS Code</a>.</p>
      <p>Up top are a couple links to my online profiles,
        and in the cards below is a portfolio of projects I've done,
        which contains things I've created for myself or other clients.</p>
      <p>You can contact me at <a href='mailto:mikefed@protonmail.com'>mikefed@protonmail.com</a>.</p>
    </md-card-content>
  </md-card>

  <md-card>
    <md-card-header>
      <div class='md-title'>Public Project Portfolio</div>
    </md-card-header>

    <md-card-content>
      <md-tabs md-alignment='right' :md-active-tab='tab || "tabs-everything"' :md-dynamic-height='true'>
        <md-tab id='tabs-featured' md-label='featured'>
          <div class='md-layout md-gutter md-alignment-center-center' id='projects-layout' style='margin-right: 32px;'>
            <div class='md-layout-item md-large-size-25 md-medium-size-33 md-small-size-50 md-xsmall-size-100' v-for='project of featuredProjects' :key='project.name'>
              <router-link :title='project.name' :to='"/projects/" + project.name'>
                <img :src='getImageSrc(project.name)' :alt='project.name' />
              </router-link>
            </div>
          </div>
        </md-tab>

        <md-tab id='tabs-everything' md-label='everything'>
          <div class='md-layout md-gutter md-alignment-center-center' id='projects-layout' style='margin-right: 32px;'>
            <div class='md-layout-item md-large-size-25 md-medium-size-33 md-small-size-50 md-xsmall-size-100' v-for='project of projects' :key='project.name'>
              <router-link :title='project.name' :to='"/projects/" + project.name'>
                <img :src='getImageSrc(project.name)' :alt='project.name' />
              </router-link>
            </div>
          </div>
        </md-tab>
      </md-tabs>
    </md-card-content>
  </md-card>

  <md-card>
    <md-card-header>
      <div class='md-title'>Client Project Portfolio</div>
    </md-card-header>

    <md-card-content>
      <md-list>
        <md-list-item v-for='cp of clientProjects' :key='cp.name' :md-expand='true'>
          <span>{{cp.name}}</span>
          <div slot='md-expand' class='project-description' v-html='cp.description'></div>
        </md-list-item>
      </md-list>

    </md-card-content>
  </md-card>
</div>
</template>
<script src='./home.ts'></script>
<style lang='scss'>
div#home > div#intro a {

  font-weight: 500;

  &.angular {
    color: #f44336;
    &:visited { color: #f44336; }
    &:hover { color: #c62828; }
  }

  &.vue {
    color: #41b883;
    &:visited { color: #41b883; }
    &:hover { color: #349268; }
  }

  &.ionic {
    color: #2196F3;
    &:visited { color: #2196F3; }
    &:hover { color: #0277BD; }
  }

  &.cordova {
    color: #607D8B;
    &:visited { color: #607D8B; }
    &:hover { color: #37474F; }
  }

  &.nodejs {
    color: #43853d;
    &:visited { color: #43853d; }
    &:hover { color: #31632d; }
  }

  &.express {
    color: #03A9F4;
    &:visited { color: #03A9F4; }
    &:hover { color: #0277BD; }
  }

  &.rethinkdb {
    color: #1b5062;
    &:visited { color: #1b5062; }
    &:hover { color: #2e829e; }
  }

  &.git {
    color: #FF5722;
    &:visited { color: #FF5722; }
    &:hover { color: #D84315; }
  }

  &.code {
    color: #373277;
    &:visited { color: #373277; }
    &:hover {color: #423c8e; }
  }
}

.project-description {
  margin: 16px;
  margin-left: 32px;
  font-size: 0.8rem;
  white-space: normal;
  ul > li {
    &:not(:last-child) {
      margin-top: 0.25rem;
    }
    &:last-child {
      margin-bottom: 0.25rem;
    }
  }
}

/*
 * Project layout
 */
div.md-layout#projects-layout {
  > div {
    display: flex;
    justify-content: center;
    > a,
    > button {
      position: relative;
      display: block;
      padding: 0;
      max-height: 128px;
      max-width: 128px;
    }

    > a img,
    > button img {
      max-height: 100%;
    }

    > a::after,
    > button::after {
      content: '';
      z-index: -1;

      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;

      box-shadow: 0 1px 5px 0px rgba(0, 0, 0, 0.6);

      opacity: 0;
      transition: opacity 0.2s ease-in-out;
    }

    > button:hover::after,
    > a:hover::after {
      opacity: 1;
    }
  }
}
</style>
