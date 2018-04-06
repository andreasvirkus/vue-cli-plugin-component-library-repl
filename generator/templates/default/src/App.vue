<template>
  <div id="app" class="app-container">
    <bb-navbar>
      <bb-logo />
    </bb-navbar>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    min-height: 100vh;
  }

  .app-container {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
  }

  main {
    text-align: center;
    margin-top: 40px;
  }
</style>
