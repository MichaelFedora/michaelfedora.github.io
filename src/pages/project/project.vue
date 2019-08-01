<template>
<div id='project'>

  <md-dialog
    :md-active.sync='active'
    @md-closed='onClose'>
    <md-card class='my-card'>
      <md-card-media style='overflow: hidden'>
        <img :src='getDetailImageSrc(detailed.image)' :alt='detailed.image' />
      </md-card-media>

      <md-card-header>
        <div class='md-title'>{{ detailed.title }}</div>
        <div class='md-subhead' v-html='detailed.caption'></div>
      </md-card-header>

      <md-card-actions>
        <md-button v-if='idx > 0' class='md-icon-button' @click.native='prevDetail()'><md-icon>navigate_before</md-icon></md-button>
        <span style='flex: 1'></span>
        <md-button v-if='project && idx < project.details.length - 1' class='md-icon-button' @click.native='nextDetail()'><md-icon>navigate_next</md-icon></md-button>
      </md-card-actions>

      <md-dialog-actions>
        <md-button class='md-primary' @click="active = false">Close</md-button>
      </md-dialog-actions>
    </md-card>
  </md-dialog>

  <md-card v-if='project'>
    <md-card-header>
      <md-avatar class='md-large' style='border-radius: 0'>
        <img :src='getImageSrc(project.name)' />
      </md-avatar>
      <div class='md-title'>{{ project.name }}</div>
      <div class='md-subhead'>{{ project.caption }}</div>
      <router-link to='/' class='md-subhead'>&lt;- go back home</router-link>
    </md-card-header>
    <md-card-content>
      <p v-html='project.description'></p>
      <p v-if='project.link'>You can find it <a :href='project.link'>here</a>.</p>

      <div class='md-layout md-gutter md-alignment-center-center' id='images-layout' v-if='project.details.length > 0'>
        <div class='md-layout-item md-large-size-25 md-medium-size-33 md-small-size-50 md-xsmall-size-100' v-for='(detail, index) of project.details' :key='detail.name'>
          <md-button @click.native='openDialog(index)' :title='detail.title'>
            <img :src='getDetailImageSrc(detail.image)' :alt='detail.image' />
          </md-button>
        </div>
      </div>
    </md-card-content>
  </md-card>

  <md-card v-else>
    <md-card-header>
      <div class='md-title'>No project found with that name</div>
    </md-card-header>
    <md-card-content>
      <p>Sorry :(</p>
    </md-card-content>
  </md-card>
</div>
</template>
<script src='./project.ts'></script>
<style lang='scss'>
div#project {
  div.my-card {
    display: flex;
    flex-flow: column;
    max-height: 100%;
    > .md-card-media {
      display: flex;
      justify-content: center;
      background-color: rgba(0,0,0,0.8);
      > img {
        width: auto;
        height: 100%;
      }
    }
  }

  div.md-button-content {
    height: 100%;
  }

  div.md-layout#images-layout {
    > div {
      display: flex;
      justify-content: center;
      > a,
      > button {
        position: relative;
        display: block;
        padding: 0;
        height: 128px;
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
}
</style>
