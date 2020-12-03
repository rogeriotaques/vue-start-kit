<template lang="pug">
  div(:class="classes")
    .bar(:style="`width: ${value.replace(/[%\s]/g,'')}%`") &nbsp;
    .label.align-right(
      v-if="!isUndefined && label",
      :style="`width: ${value.replace(/[%\s]/g,'')}%`",
      v-html="label"
    )
</template>

<script lang="ts">
export default {
  name: 'SProgressBar',

  props: {
    color: {
      validator: (val) => val === null || ['primary', 'red', 'orange', 'green', 'purple', 'darkgrey', 'grey', 'softgrey', 'link'].includes(val),
      default: 'primary'
    },

    isUndefined: {
      type: Boolean,
      required: false
    },

    label: {
      type: String,
      default: ''
    },

    value: {
      type: [Number, String],
      default: 0
    }
  },

  computed: {
    classes(): string {
      let className = `progress-bar ${this.color}`;

      if (this.isUndefined) {
        className = `${className} undefined`;
      }

      return className;
    }
  }
};
</script>

<style lang="scss" scoped>
.progress-bar {
  .label {
    padding: 0 8px;
    box-sizing: border-box;
  }
}
</style>
