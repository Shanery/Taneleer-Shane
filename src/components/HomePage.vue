<template>
  <div id="app" @scroll="bottomVisible">
    <!-- Feed -->
    <div class="wall">
      <stack :column-min-width="240" :gutter-width="0" :gutter-height="0" :monitor-images-loaded="true">
        <stack-item v-for="(post, i) in posts" :key="i">
          <!-- Post -->
          <thumb-card :post="post" :index="i" 
            @open="expandPost"></thumb-card>
        </stack-item>
      </stack>
    </div>

    <!-- Popup Modal - Expanded Card -->
    <modal :active="modal" @close="modal=false" v-if="curPost">
      <modal-card :bars="true"
        @prev="prevPost" @next="nextPost">
        <!-- Image -->
        <div v-if="imgUrl" class="modal-card-image">
          <img :src="imgUrl">
        </div>
        <!-- Text Section -->
        <div class="modal-card-content">
          <div class="level">
            <h3 class="title g1">{{ userId }}</h3>
            <a :href="linkToOriginal" class="logo-link">
              <font-awesome-icon :icon="curServiceLogo" size="2x"></font-awesome-icon>
            </a>
          </div>
          <hr>
          <p class="text">{{ text }}</p>
        </div>
      </modal-card>
    </modal>
   
  </div>
</template>

<script>

import axios from 'axios'
import ThumbCard from './ThumbCard/ThumbCard.vue'
import Modal from './ModalElements/Modal'
import ModalCard from './ModalElements/ModalCard.vue'

import { faTwitter, faInstagram } from '@fortawesome/fontawesome-free-brands'

import { Stack, StackItem } from 'vue-stack-grid';

export default {
  name: 'HomePage',
  components: {
    ThumbCard,
    Stack, 
    StackItem,
    Modal,
    ModalCard
  },
  data() {
    return {
      posts: [],
      fetching: false,
      pages: 0,

      currentPost: null,
      modal: false
    }
  },
  created() {
    // Infinite Scroll
    window.addEventListener('scroll', () => {
      if (this.bottomVisible() && !this.fetching) {
        this.fetching = true;
        this.getImages();
      }
    })
  },
  computed: {
    curPost() {
      var post = this.posts[this.currentPost];

      return post;
    },
    curServiceLogo() {
      if (!this.curPost) return;
      let logos = {
        "Twitter": faTwitter,
        "Instagram": faInstagram
      }
      return logos[this.curPost.service];
    },
    imgUrl() {
      var post = this.curPost;
      if (post && post.mainImage.hasOwnProperty("url")) {
        return post.mainImage.url;
      }
      // If post doesn't Have images
      return null;
    },
    text() {
      if (this.curPost) return this.curPost.caption;
    },
    userId() {
      if (this.curPost) return this.curPost.user;
    },
    linkToOriginal() {
      if (this.curPost) return this.curPost.url;
    }
  },

  methods: {
    getImages() {
      return new Promise((resolve, reject) => {
        var self = this;
        self.fetching = true;
        
        axios.get("https://taneleer.composedcreative.com/api/v1/feed/a0329f16-9225-11e6-89bb-296a97b9d609/fabb8b71-496e-11e8-afe9-1253691739d7",
          { 
            params: {
              "filter[services]": ["Instagram"],
              "page[number]": self.pages,
              "page[size]": 30
            }
          })
        .then(function(result) {
          console.log(result);
          let data = result.data.data;
          self.posts.push(...data);

          self.pages++;
          console.log(self.pages);
          this.populateColumns(data);
        }.bind(this))
        .then(() => new Promise(resolve => {
          setTimeout(resolve, 1000);
          self.fetching = false;
          resolve(null);
        }))
        .catch(error => {
          // console.log(error);
          self.fetching = false;
        })

        
      })
    },
    bottomVisible() {
      const scrollY = window.scrollY
      const visible = document.documentElement.clientHeight
      const pageHeight = document.documentElement.scrollHeight
      const bottomOfPage = visible + scrollY >= pageHeight - 2 * visible;
      return bottomOfPage || pageHeight < visible;
    },
    expandPost(post) {
      this.currentPost = post;
      this.modal = true;
    },
    prevPost() {
      if (this.currentPost > 0) {
        this.currentPost -= 1;
      }
    },
    nextPost() {
      if (this.fetching) return;

      // Get More Images If End Reached
      if (this.currentPost >= this.posts.length - 1) {
        this.fetching = true;

        this.getImages()
          .then(() => {
            this.currentPost += 1;
          })
      } else {
        this.currentPost += 1;
      }
    }
  },
  mounted() {
    this.getImages();
  }
  
}
</script>

<style lang="scss">
.modal-card {
  display: flex;
  flex-direction: row;
  height: 80vh;
  max-height: 80vh;
  
  background-color: #FFF;
  border-radius: 1em;
  overflow: hidden;

  .modal-card-image {
    flex-grow: 1;
    width: 50%;
    max-width: 50%;
    img {
      width: 100%;
      height: 100%;

      object-fit: cover;
    }
  }

  .modal-card-content {
    width: 50%;
    flex-grow: 1;

    background-color: #FFF;
    padding: 2em;

    text-align: left;

    overflow-y: auto;
  }
}


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>


