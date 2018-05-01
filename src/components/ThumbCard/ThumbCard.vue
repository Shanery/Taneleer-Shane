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

.thumb {
  cursor: zoom-in;

  .card-container {
    width: 100%;
    height: 100%;
  }

  .card-container.hover {
    
    .card {
      transition: 0.1s ease-in;
      transform: translateY(-5px);
      opacity: 0.5;
      box-shadow: 0px 4px 10px 0px #878787;
    }
  }

  .options {
    display: none;

    position: absolute;
    top: 0;
    z-index: 10;

    padding: 1em;
    padding-left: 1.25em;

    .logo-button {
      background-color: #555;
      color: white;
      border-radius: 1em;
      border: none;

      width: 45px;
      height: 45px;

      &:hover {
        background-color: #f1f1f1;
        color: #555;
      }
    }

  }

  .options.hover {
    display: flex;
  }
}



.card {
  
  border: 1px solid #DDD;
  border-radius: 1em;

  margin: 0.5em;
  margin-bottom: 1em;

  display: flex;
  flex-direction: column;

  overflow: hidden;
  transition: 0.1s ease-in;
  box-shadow: 0px 2px 0px -2px #878787;

  .card-image {
    margin: 0;
    // padding: 0.5em 0.5em 0em 0.5em;
    padding: 0;
    max-height: 400px;
    box-shadow: 0px 2px 10px -2px #878787;
    overflow: hidden;

    img {
      width: 100%;
      max-width: 100%;
      height: 100%;
      max-height: 400px;
      vertical-align: top;
      object-fit: cover;
      
      // border-radius: 1em;

      
    }
  }

  .card-body {
    padding: 1em;

    text-align: left;

    > * {
      margin-top: 0;
      margin-bottom: 0.75em;
    }

    *:last-child {
      margin-bottom: 0;
    }

    .subtitle {
      font-size: 1em;
    }
  }

  .card-body:not(:first-child) {
    padding-top: 0.75em;
  }

  
}

</style>