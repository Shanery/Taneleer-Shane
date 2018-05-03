<template>
  <div class="card">
    <div class="card-image"
      v-if="imgUrl">
      <img  :src="imgUrl" alt="">
    </div>

    <div class="card-body">
      <div class="level">
        <h6 class="subtitle g1">@{{userId}}</h6>
        <small>{{ date }}</small>
      </div> 
      <p v-html="text"></p>

    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: "InstagramCard",
  props: {
    post: Object
  },
  computed: {
    imgUrl() {
      if (this.post.mainImage.hasOwnProperty("url")) {
        return this.post.mainImage.url;
      }

      // If post doesn't Have images
      return null;
    },

    text() {
      if (this.post.caption.length > 130) {
        return this.$store.getters.linkifyStr(this.post.caption.slice(0, 130) + "...", "Instagram") ;
      }
      return this.$store.getters.linkifyStr(this.post.caption,"Instagram");
    },
    date() {
      const date = moment(this.post.createdDate.date);
      return date.format('hh:mm a');
      // return date.fromNow();
    },

    userId() {
      return this.post.user;
    }
  }
}
</script>
