<template>
<div id='app' class='md-theme-default'>
  <md-toolbar class='md-dense shadow'>
    <md-button href='/' class='my-icon-button'>
      <md-avatar>
        <img src='https://avatars3.githubusercontent.com/u/13156131?v=3&s=40'>
      </md-avatar>
    </md-button>

    <router-link to='/' class='md-title'>Michael Fedora</router-link>
    <span style='flex:1'></span>

    <div>
        <md-button href='mailto:mikefed@protonmail.com' class='my-icon-button'>
          <md-avatar class='my-center'>
            <md-icon>mail</md-icon>
          </md-avatar>
        </md-button>
      <md-button href='https://stackoverflow.com/users/story/7954649' class='my-icon-button'>
        <md-avatar class='my-center'>
          <div class='so'></div>
        </md-avatar>
      </md-button>
      <md-button href='https://github.com/MichaelFedora/' class='my-icon-button'>
        <md-avatar class='my-center'>
          <svg aria-hidden="true" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
        </md-avatar>
      </md-button>
    </div>
  </md-toolbar>

  <div id='logo'>
    <div class='lg-michael'></div>
    <div class='lg-fedora'></div>
  </div>

  <div id='body'>
    <router-view></router-view>
  </div>

  <div id='footer'>
    <div id='footer-inner'>
      <span>Copyright (c) 2019, Michael Fedora, all rights reserved</span>
      <span>Made with <a href='https://vuejs.org/'>Vue.js</a></span>
    </div>
  </div>
</div>
</template>
<script src='./app.ts'></script>
<style lang='scss'>
div#body {
  padding: 1rem;
  display: flex;
  flex-flow: column;
  align-items: center;
  padding-bottom: calc(2rem + 70px);
}

div#body > * {
  width: 80%;

  > *:not(:last-child) {
    margin-bottom: 1rem;
  }
}

div#footer {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 70px;
  margin: 1rem;
  margin-top: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

div#footer-inner {

  padding: 3px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  color: white;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 2px;
}

div#footer-inner > *:not(:last-child) {
  margin-right: 1rem;
}

div#footer-inner > * {
  text-align: center;
  padding: 6px;
}

div#logo {
  display: flex;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
}

div#logo > div {
  height: 128px;
  background-position-x: center;
  background-size: contain;
  background-repeat: no-repeat
}

div.lg-michael {
  width: 468px;
  background-position-y: bottom;
  background-image: url('/assets/gfx/lg_michael_x128.png');
}

div.lg-fedora {
  width: 416px;
  background-position-y: top;
  background-image: url('/assets/gfx/lg_fedora_x128.png');
}
</style>
