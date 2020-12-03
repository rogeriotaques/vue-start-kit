<template lang="pug">
  div.align-center
    div(
      :class="classes"
      :data-label="dataLabel"
    )
</template>

<script lang="ts">
export default {
  name: 'SSpinner',

  props: {
    color: {
      validator: (val) => val === null || ['primary', 'red', 'orange', 'green', 'purple', 'darkgrey', 'grey', 'softgrey'].includes(val),
      default: 'primary'
    },

    size: {
      validator: (val) => val === null || ['default', 'medium', 'big'].includes(val),
      default: 'default'
    },

    speed: {
      validator: (val) => val === null || ['default', 'fast', 'furious'].includes(val),
      default: 'default'
    },

    dataLabel: {
      type: String,
      default: 'Loading …'
    }
  },

  computed: {
    classes(): string {
      return `spinner ${this.size} ${this.speed} ${this.color}`;
    }
  }
};
</script>
