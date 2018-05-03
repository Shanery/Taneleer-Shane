<template>
  <div class="thumb" :class="{'hover': isHover}"
    @mouseover="hoverOver" @mouseout="hoverOut">
    <!-- Card Image -->
    <div class="card-container" :class="{'hover': isHover}" @click="expandPost">
      <component :is="type" :post="post"></component>
    </div>
    
    <div class="options" :class="{'hover': isHover}">
      <a :href="linkToOriginal"><button class="logo-button">
        <font-awesome-icon :icon="logo" size="2x" fixed-width/>
      </button></a>
    </div>

  </div>
</template>

<script>

import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import { faTwitter, faInstagram } from '@fortawesome/fontawesome-free-brands'

import TwitterCard from './TwitterCard'
import InstagramCard from './InstagramCard'

export default {
  name: 'ThumbCard',
  props: {
    post: Object,
    index: Number
  },
  data() {
    return {
      isHover: false
    }
  },
  computed: {
    type() {
      let types = {
        "Twitter": "TwitterCard",
        "Instagram": "InstagramCard"
      }
      return types[this.post.service]
    },
    logo() {
      let logos = {
        "Twitter": faTwitter,
        "Instagram": faInstagram
      }

      return logos[this.post.service];
    },
    linkToOriginal() {
      return this.post.url;
    }
  },
  methods: {
    expandPost() {
      this.$emit('open', this.index);
    },
    hoverOver() {
      this.isHover = true;
    },
    hoverOut() {
      this.isHover = false;
    }
  },
  components: {
    TwitterCard,
    InstagramCard,
    FontAwesomeIcon
  }
}
</script>

<style lang="scss">

  @import 'ThumbCard.scss';

</style>