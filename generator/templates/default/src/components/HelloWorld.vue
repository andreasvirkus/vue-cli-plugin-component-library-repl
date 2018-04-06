<template>
  <article>
    <h1>{{ msg }}</h1>
    <h2>What to do next?</h2>
    <ol>
      <li>Check out Vue's <a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li>Ask anything on <a href="https://chat.big.local/chat/room/423" target="_blank" rel="noopener">IC support chat</a> (on HipChat)</li>
      <li>Go over the project structure, change these places accordingly:
        <ul>
          <li>public/manifest.json</li>
          <li>TODO: Name other places to change stuff</li>
        </ul>
      </li>
      <li>Live long and prosper.</li>
    </ol>

    <h2>Vue's ecosystem links:</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </article>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Bigbank-primed Vue.js app'
    }
  }
}
</script>
