<template>
  <div class="card">
    <div class="card-image"
      v-if="imgUrl">
      <img  :src="imgUrl" alt="">
    </div>

    <div class="card-body">
      <h6 class="subtitle">@{{userId}}</h6>
      <p>{{text}}</p>

    </div>
  </div>
</template>

<script>
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
        return this.post.caption.slice(0, 130) + "..." ;
      }
      return this.post.caption
    },
    userId() {
      return this.post.user;
    }
  }
}
</script>
