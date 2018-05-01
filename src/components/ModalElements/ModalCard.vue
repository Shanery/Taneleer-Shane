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
.modal-card-container {
  display: flex;
  flex-direction: row;
  align-items: stretch;

  width:100%;
  height: 100%;
}

.modal-card {
  max-width: 800px;
}

.bar {
  display: flex;
  align-items: center;
  flex-grow: 1;
  height: 100%;

  color: #FFF;

  &:hover {
    cursor: pointer;
    background-color: rgba(20,20,20,0.5);
  }

  * {
    flex-grow: 1;
  }
}
</style>
