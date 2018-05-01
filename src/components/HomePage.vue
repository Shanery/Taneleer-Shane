<template>
  <div id="app" @scroll="bottomVisible">
    
    <div id="select-source">
      <div class="tabs">
        <button class="tab" v-for="(service, title) in services"
          :class="{'is-active': title==currentService}"
          @click="changeService(title)">
          {{ title }}
          <font-awesome-icon :icon="service.logo"></font-awesome-icon>
        </button>
      </div>
      
    </div>
    <!-- Feed -->
    <div class="wall">
      <stack :column-min-width="240" :gutter-width="0" :gutter-height="0" :monitor-images-loaded="true">
        <stack-item v-for="(post, i) in curPosts" :key="i">
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
        <!-- Body Section -->
        <div class="modal-card-content">
          <!-- Header -->
          <div class="level">
            <h3 class="title g1">{{ userId }}</h3>
            
              <a :href="linkToOriginal" class="logo-link">
                <button class="logo-button"><font-awesome-icon :icon="curServiceLogo" size="3x"></font-awesome-icon></button>
              </a> 
          </div>
          <hr>
          <!-- Text -->
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
      services: this.$store.state.services,
      fetching: false,
      currentService: "Twitter",

      currentPost: null,
      modal: false
    }
  },
  created() {
    // Infinite Scroll
    window.addEventListener('scroll', () => {
      if (this.bottomVisible() && !this.fetching) {
        this.fetching = true;
        this.getImages(this.services[this.currentService]);
      }
    })

    for (const service in this.services) {
      if (this.services.hasOwnProperty(service)) {
        const element = this.services[service];
        
        this.$set(element, 'posts', []);
        this.$set(element, 'page', 0);
      }
    }
    
  },
  computed: {
    curPost() {
      const posts = this.services[this.currentService].posts;
      var post = posts[this.currentPost];

      return post;
    },
    curPosts() {
      return this.services[this.currentService].posts
    },
    curServiceLogo() {
      if (!this.curPost) return;
      return this.$store.state.services[this.curPost.service].logo;
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
    },
  },

  methods: {
    getImages(service, serviceName) {
      return new Promise((resolve, reject) => {
        var self = this;
        self.fetching = true;
        
        console.log(service.name)
        console.log(service.page)
        
        axios.get("https://taneleer.composedcreative.com/api/v1/feed/a0329f16-9225-11e6-89bb-296a97b9d609/fabb8b71-496e-11e8-afe9-1253691739d7",
          { 
            params: {
              "filter[services]": [service.name],
              "page[number]": service.page,
              "page[size]": 30
            }
          })
        .then(function(result) {
          console.log(result);
          let data = result.data.data;
          service.posts.push(...data);

          service.page++;
          console.log(service.page);
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
      const posts = this.services[this.currentService].posts;
      // Get More Images If End Reached
      if (this.currentPost >= posts.length - 1) {
        this.fetching = true;

        this.getImages(this.services[this.currentService])
          .then(() => {
            this.currentPost += 1;
          })
      } else {
        this.currentPost += 1;
      }
    },
    changeService(service) {
      this.currentService = service;
    }
  },
  mounted() {
    this.fetching = true;

    for (const service in this.services) {
      if (this.services.hasOwnProperty(service)) {
        const element = this.services[service];

        this.getImages(element);
      }
    }



    

    
  }
  
}
</script>

<style lang="scss">
.modal-card {
  display: flex;
  flex-direction: row;
  
  width:860px;
  max-width: 860px;

  background-color: #FFF;
  border-radius: 1em;
  overflow: auto;

  .modal-card-image {
    flex-grow: 1;
    width: 50%;
    max-width: 50%;
    height: 100%;
    img {
      vertical-align: top;
      width: 100%;
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

  .logo-button {
    background-color: #DDD;
    color: #555;
    border-radius: 1em;
    border: none;
    padding: 0;

    width: 45px;
    height: 45px;

    &:hover {
      cursor: pointer;
      background-color: #555;;
      color: #DDD;
    }
  }
  
}

.tabs {
  .tab {
    font-size: 18px;

    padding: 0.5em 1em;
    border: 2px solid #5070B5;
    border-radius: 0.5em;
    margin: 0.5em;

    &.is-active {
      background-color: #5070B5;
      border: 0px solid #5070B5;
    }

    &:hover {
      cursor: pointer;
      color: #DDD;
    }
  }
}


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>


