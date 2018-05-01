<template>
  <div class="card">
    <div class="card-image"
      v-if="imgUrl">
      <img  :src="imgUrl" alt="">
    </div>

    <div class="card-body">
      <h6 class="subtitle">@{{userId}}</h6>
      <p v-html="text"></p>

    </div>
  </div>
</template>

<script>

export default {
  name: "TwitterCard",
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
      return this.$store.getters.linkify(this.post.caption);
    },
    userId() {
      return this.post.user;
    }
  }
}
</script>
