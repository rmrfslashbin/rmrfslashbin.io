<template>
  <b-container>
    <b-row>
      <b-col>
        <p>This is my thing. <router-link :to="{ name: 'learn'}">Learn More</router-link>.</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="12" md="6" lg="6" xl="4">
        <b-card
          class="shadow-1 m-2"
          title="Contacts"
          sub-title="How to to engage with me."
        >
          <dl>
            <dt>Email</dt>
            <dd><a href="mailto:sigler@improvisedscience.org">sigler@improvisedscience.org</a></dd>
            <dt>Twitter DM</dt>
            <dd><a href="https://twitter.com/rmrfslashbin" target="_twitter">@rmrfslashbin</a></dd>
            <dt>SMS/Signal</dt>
            <dd><a href="tel:404-939-4854">404-939-4854</a></dd>
          </dl>
        </b-card>
      </b-col>
      <b-col sm="12" md="6" lg="6" xl="4">
        <b-card
        class="shadow-1 m-2"
          title="Presence"
          sub-title="I exist in multiple places."
        >
          <dl>
            <dt>Keybase (proof)</dt>
            <dd><a href="https://keybase.io/rmrfslashbin" target="_keybase">rmrfslashbin</a></dd>
            <dt>Twitter (musings)</dt>
            <dd><a href="https://twitter.com/rmrfslashbin" target="_twitter">@rmrfslashbin</a></dd>
            <dt>Reddit (things)</dt>
            <dd><a href="https://www.reddit.com/user/rmrfslashbin" target="_reddit">/u/rmrfslashbin</a></dd>
            <dt>Github (code)</dt>
            <dd><a href="https://github.com/rmrfslashbin" target="_github">rmrfslashbin</a></dd>
            <dt>Gists (notes)</dt>
            <dd><a href="https://gist.github.com/rmrfslashbin" target="_gh_gists">rmrfslashbin</a></dd>
            <dt>LinkedIn (profession)</dt>
            <dd><a href="https://www.linkedin.com/in/robertsigler/" target="_linkedin">robertsigler</a></dd>
            <dt>Recipes (food)</dt>
            <dd><a href="https://notes.improvisedscience.org/" target="_notes">notes wiki</a></dd>
          </dl>
        </b-card>
      </b-col>
      <b-col sm="12" md="12" lg="12" xl="4">
        <b-card
        class="shadow-1 m-2"
          title="Who Am I"
          sub-title="I pile of words to describe me."
        >
          <b-badge variant="primary" class="m-2 p-2" v-for="item in meItems" :key="item">{{ item }}</b-badge>
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
      'atlanta',
      'aws',
      'beers',
      'bourbon',
      'cloud',
      'cooking',
      'data center',
      'ergometer',
      'gay',
      'gin martinis',
      'gym rings',
      'he/him/his',
      'infrastructure',
      'introvert',
      'javascript',
      'leader',
      'linux',
      'married',
      'nerd',
      'node.js',
      'python',
      'technologist',
      'ubuntu',
      'uncle',
      'weight lifting',
      'xbox'
    ]
    // Shuffle it!
    this.meItems = shuffle(items)
  },
  methods: {

  }
}
</script>