<template lang="pug" >
  div.progress-bar(
    v-bind:class="{'undefined': isUndefined || false}"
  )
    div.bar
    label(v-html="label", v-if="!isUndefined && label")
</template>

<script lang="ts" >
export default {
  name: "SeedProgressBar",

  props: {
    isUndefined: {
      type: Boolean,
      required: false
    },

    label: {
      type: String,
      required: false
    }
  }
};
</script>
