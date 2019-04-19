<template lang="pug" >
  div(
    v-bind:class="{'has-feedback': hasFeedback}"
  ).field
    label(
      v-bind:for="name || 'myfield'",
      v-html="label"
      v-if="label"
    )

    input(
      v-bind:type="type || 'text'", 
      v-bind:name="name || 'myfield'", 
      v-bind:id="name || 'myfield'", 
      v-bind:placeholder="placeholder || ''", 
      v-bind:value="value || ''", 
      v-bind:maxLength="maxLength || ''", 
      v-bind:required="required || false", 
      v-bind:disabled="disabled || false"
      v-bind:class="hasFeedback"
      v-bind:autofocus="autofocus ? 'autofocus' : false"
      v-on:blur="$emit('blur')"
      v-on:focus="$emit('focus')"
      v-on:change="$emit('change')"
      v-on:keypress="$emit('keypress')"
      v-on:keydown="$emit('keydown')"
      v-on:keyup="$emit('keyup')"
      v-on:click="$emit('click')"
      v-on:mouseup="$emit('mouseup')"
      v-on:mousedown="$emit('mousedown')"
    )

    span(
      v-if="hasFeedback"
      v-bind:class="hasFeedback"
      v-html="message"
    )

    span(
      v-if="!hasFeedback && message"
      v-html="message"
    ).info
</template>

<script lang="ts" >
export default {
  name: "SeedField",

  props: {
    type: {
      type: String as () =>
        | "text"
        | "search"
        | "url"
        | "email"
        | "tel"
        | "password"
        | "range"
        | "radio"
        | "checkbox",
      required: false
    },

    name: {
      type: String,
      required: true
    },

    placeholder: {
      type: String,
      required: false
    },

    value: {
      type: String,
      required: false
    },

    maxLength: {
      type: String,
      required: false
    },

    required: {
      type: Boolean,
      required: false
    },

    disabled: {
      type: Boolean,
      required: false
    },

    autofocus: {
      type: Boolean,
      required: false
    },

    label: {
      type: String,
      required: false
    },

    hasFeedback: {
      type: String as () => "error" | "success",
      required: false
    },

    message: {
      type: String,
      required: false
    }
  }
};
</script>
