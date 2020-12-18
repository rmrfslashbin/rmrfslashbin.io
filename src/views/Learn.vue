<template>
  <b-container>
    <b-row>
      <b-col>
        <p>How it's made. Go back to <router-link :to="{ name: 'root'}">my thing</router-link>.</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-card
          class="shadow-1 m-2"
          title="What is this?"
        >
          This <a href="https://vuejs.org/">Vue.js</a> project is my homepage. 
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="12" md="6" lg="6" xl="6">
        <b-card
        class="shadow-1 m-2"
          title="Projects & Frameworks."
          sub-title="To build and serve this project, I used the following frameworks."
        >
          <dl>
            <dt>Vue.js</dt>
            <dd><a href="https://vuejs.org/" target="_vuejs">https://vuejs.org/</a></dd>
            <dt>Vue Router</dt>
            <dd><a href="https://router.vuejs.org/" target="_vueRouter">https://router.vuejs.org/</a></dd>
            <dt>Sass</dt>
            <dd><a href="https://sass-lang.com/" target="_sass">https://sass-lang.com/</a></dd>
            <dt>Bootstrap</dt>
            <dd><a href="https://getbootstrap.com/" target="_bootstrap">https://getbootstrap.com/</a></dd>
            <dt>Bootstrap-Vue</dt>
            <dd><a href="https://bootstrap-vue.org/" target="_bootstrapVue">https://bootstrap-vue.org/</a></dd>
            <dt>Bootswatch</dt>
            <dd><a href="https://bootswatch.com/darkly/" target="_bootswatch">https://bootswatch.com/darkly/</a></dd>
            <dt>Powered by AWS</dt>
            <dd><a href="https://aws.amazon.com/" target="_aws">https://aws.amazon.com/</a></dd>
          </dl>
        </b-card>
      </b-col>
      <b-col sm="12" md="6" lg="6" xl="6">
        <b-card
        class="shadow-1 m-2"
          title="More info."
        >
          <dl>
            <dt>Project Repo</dt>
            <dd><a href="https://github.com/rmrfslashbin/rmrfslashbin.io" target="_githubRepo">https://github.com/rmrfslashbin/rmrfslashbin.io</a></dd>
            <dt>Project Issues</dt>
            <dd><a href="https://github.com/rmrfslashbin/rmrfslashbin.io/issues" target="_githubRepoIssues">https://github.com/rmrfslashbin/rmrfslashbin.io/issues</a></dd>
            <dt>README</dt>
            <dd><a href="https://github.com/rmrfslashbin/rmrfslashbin.io/blob/main/README.md" target="_githubRepoReadme">README</a></dd>
            <dt>License</dt>
            <dd><a href="https://github.com/rmrfslashbin/rmrfslashbin.io/blob/main/LICENSE" target="_githubRepoLicense">MIT</a></dd>
          </dl>
          <p>Copyright (c) 2020 Robert Sigler &lt;sigler@improvisedscience.org&gt;</p>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

import { shuffle } from '@/lib/utils'

export default {
  name: 'Root',
  components: {
  },
  data () {
    return {
      meItems: []
    }
  },
  mounted () {
    // My list of things
    const items = [
      'gay',
      'married',
      'uncle',
      'he/him/his',
      'technologist',
      'linux',
      'nerd',
      'atlanta',
      'bourbon',
      'gin martinis',
      'beers',
      'python',
      'node.js',
      'javascript',
      'xbox',
      'ubuntu',
      'leader',
      'introvert',
      'aws',
      'cloud',
      'data center',
      'infrastructure',
      'weight lifting',
      'ergometer',
      'gym rings',
      'cooking'
    ]
    // Shuffle it!
    this.meItems = shuffle(items)
  },
  methods: {

  }
}
</script>