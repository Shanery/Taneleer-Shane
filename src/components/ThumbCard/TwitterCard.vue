<template>
  <div class="card">
    <div class="card-image"
      v-if="imgUrl">
      <img  :src="imgUrl" alt="">
    </div>

    <div class="card-body">
      <div class="level">
        <h6 class="subtitle g1">@{{userId}}</h6>
        <span>{{ date }}</span>
      </div> 
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
    date() {
      const date = new Date(this.post.createdDate.date);
      const months = ['Jan', 'Feb', 'Mar', 'Thur', 'Fri', 'Sat', 'Sun'];
      
      const month = months[date.getMonth()];
      const days = date.getDate();
      const hours = date.getHours();
      const minutes = date.getMinutes();

      return month + ' ' + days + ' ' + hours + ':' + minutes;
    },

    text() {
      return this.$store.getters.linkifyStr(this.post.caption, "Twitter");
    },
    userId() {
      return this.post.user;
    }
  }
}
</script>
