<template lang="pug">
  div(:class="`alert ${this.color}`")
    slot This is an alert!
</template>

<script lang="ts">
export default {
  name: 'SAlert',

  props: {
    color: {
      validator: (val) => val === null || ['default', 'info', 'success', 'warning', 'danger'].includes(val),
      default: 'default'
    }
  }
};
</script>
