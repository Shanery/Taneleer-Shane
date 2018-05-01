<template>
  <div class="modal" :class="{'is-active': active}">
    <div class="modal-background" @click="close"></div>
    <div class="modal-content">
      <slot></slot>
    </div>

    <button class="close" @click="close"><font-awesome-icon :icon="icon" size="3x"/></button>
  </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import { faTimesCircle } from '@fortawesome/fontawesome-free-solid'

export default {
  name: "modal",
  props: {
    active: Boolean
  },
  components: {
    FontAwesomeIcon
  },
  computed: {
    icon() {
      return faTimesCircle
    }
  },
  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss">
.modal {
  display: block;
  opacity: 0;
  transition: 0.2s ease-in;

  &.is-active {
    display: block;
    transition: 0.2s ease-in;
    opacity: 1;

    .modal-background{display: block}
    .modal-content{display: block}
    button.close{display: block}
  }

  .modal-background {
    display: none;
    background-color: #333;
    opacity: 0.6;
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
  }
  
  .modal-content {
    display: none;
    position: fixed;
    top: 0;
    z-index: 10;
    
    width: 100%;
    height: 80vh;
    left: 50%;
    transform: translateX(-50%);

    margin-top: 10vh;
  }

  button.close {
    display: none;
    position: fixed;
    top: 1em;
    right: 1em;
    cursor: pointer;

    height: 60px;
    width: 60px;

    background-color: transparent;
    border-color: transparent;

    color: #222;
    opacity: 1;

    &:hover {
      color: #EEE;
    }
  }


  

  
}
</style>