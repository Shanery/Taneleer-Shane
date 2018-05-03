<template>
  <div class="modal-card-container">
    <div class="bar"
      v-if="bars"
      @click="prev">
      <font-awesome-icon :icon="left" size="3x"/>
    </div>
    
    <div class="modal-card">
      <slot></slot>
    </div>
    
    <div class="bar"
      v-if="bars"
      @click="next">
      <font-awesome-icon :icon="right" size="3x"/>
    </div>
  </div>
  
</template>
  
<script>

import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/fontawesome-free-solid'

export default {
  name: 'ModalCard',
  props: {
    bars: Boolean
  },
  components: {
    FontAwesomeIcon
  },
  computed: {
    left() {
      return faAngleLeft;
    },
    right() {
      return faAngleRight;
    }
  },
  methods: {
    prev() {
      this.$emit('prev');
    },
    next() {
      this.$emit('next');
    }
  }
  
}
</script>

<style lang="scss">
  @import 'ModalCard.scss';
</style>
