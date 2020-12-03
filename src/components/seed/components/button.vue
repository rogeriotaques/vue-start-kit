<template lang="pug">
  button(
    :class="classes",
    :disabled="disabled"
    @click="$emit('click')"
  )
    slot Seed Button
</template>

<script lang="ts">
export default {
  name: 'SButton',

  props: {
    color: {
      validator: (val) =>
        val === null || ['default', 'primary', 'red', 'orange', 'green', 'purple', 'darkgrey', 'grey', 'softgrey', 'link'].includes(val),
      default: 'default'
    },

    size: {
      validator: (val) => val === null || ['default', 'small', 'medium', 'big'].includes(val),
      default: 'default'
    },

    disabled: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    classes(): string {
      let className = `btn ${this.size} ${this.color}`;

      if (this.disabled) {
        className = `${className} is-disabled`;
      }

      return className;
    }
  }
};
</script>
