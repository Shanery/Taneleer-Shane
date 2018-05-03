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

<style  lang="scss">
  @import 'Modal.scss';
</style>