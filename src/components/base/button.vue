<template lang="pug" >
  button(v-on:click="click").btn
    slot Base Button
</template>

<script lang="ts" >
export default {
  name: 'BaseButton',

  props: {
    click: {
      type: Function,
      required: true
    }
  }
}
</script>
