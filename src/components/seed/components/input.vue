<template lang="pug">
  div(
    :class="{'has-feedback': hasFeedback}"
  ).field
    label(
      v-if="label"
      :for="name",
      v-html="label"
    )

    input(
      :type="type",
      :name="name",
      :id="name",
      :placeholder="placeholder",
      :value="value",
      :maxLength="maxLength",
      :required="required",
      :disabled="disabled"
      :class="hasFeedback"
      :autofocus="autofocus ? 'autofocus' : false"
      @input="$emit('input', $event)"
      @blur="$emit('blur', $event)"
      @focus="$emit('focus', $event)"
      @change="$emit('change', $event)"
      @keypress="$emit('keypress', $event)"
      @keydown="$emit('keydown', $event)"
      @keyup="$emit('keyup', $event)"
      @click="$emit('click', $event)"
      @mouseup="$emit('mouseup', $event)"
      @mousedown="$emit('mousedown', $event)"
    )

    span(
      v-if="hasFeedback && feedback"
      :class="hasFeedback"
      v-html="feedback"
    )

    span(
      v-if="help"
      v-html="help"
    ).info
</template>

<script lang="ts">
export default {
  name: 'SInput',

  props: {
    type: {
      validator: (val) => val === null || ['text', 'search', 'url', 'email', 'tel', 'password', 'range', 'radio', 'checkbox'].includes(val),
      default: 'text'
    },

    name: {
      type: String,
      default: 'my-input'
    },

    placeholder: {
      type: String,
      default: ''
    },

    value: {
      type: String,
      default: ''
    },

    maxLength: {
      type: String,
      default: ''
    },

    required: {
      type: Boolean,
      default: false
    },

    disabled: {
      type: Boolean,
      default: false
    },

    autofocus: {
      type: Boolean,
      default: false
    },

    label: {
      type: String,
      default: ''
    },

    hasFeedback: {
      validator: (val) => val === null || ['', 'error', 'success'].includes(val),
      default: ''
    },

    feedback: {
      type: String,
      default: ''
    },

    help: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss" scoped>
.field {
  span {
    &.error,
    &.success,
    &.info {
      display: block;
    }
  }
}
</style>
