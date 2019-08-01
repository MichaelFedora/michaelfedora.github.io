<template>
<div id='not-found'>
  <md-card>
    <md-card-header>
      <div class='md-title'>404 Not Found</div>
      <div class='md-subtitle'>(╯°□°）╯︵ ┻━┻</div>
    </md-card-header>
    <md-card-content>
      <p>
        Looks like you were trying to go somehwere that doesn't exist! Try going
        <router-link to='/'>home</router-link>?
      </p>
    </md-card-content>
  </md-card>
</div>
</template>
<script src='./not-found.ts'></script>
<style lang='scss'></style>
