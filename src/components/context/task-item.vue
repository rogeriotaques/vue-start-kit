// Vue Start Kit
// This component renders a list of tasks.
// @author Rogerio Taques (hello@abtz.co)
// @license MIT

<template lang="pug">
  dt(
    v-bind:key="task.id"
    v-bind:class="{done: task.complete}"
  ).task-item
    base-button(
      tooltip="Mark as done"
      v-bind:click="onComplete"
    ).link.small.checkmark.with-tooltip.bottom
      i.eva.eva-checkmark-outline

    div(
      v-if="!task.editing"
      v-on:click="onUnhide"
    ).task-text {{task.text}}

    input(
      type="text",
      placeholder="Empty will remove the task ...",
      v-if="task.editing",
      v-bind:id="`task-${task.id}`",
      v-bind:value="task.text",
      v-on:blur="onHide",
      v-on:input="evt => onUpdate(evt)",
      v-on:keypress="evt => onKeypress(evt)"
    )

    base-button(
      tooltip="Remove task",
      v-bind:click="onRemove"
    ).link.small.with-tooltip.bottom.place-right
      i.eva.eva-trash-outline
</template>

<script lang="ts">

import { Task } from "~/domain/interfaces";
import BaseButton from '~/components/base/button.vue';

export default {
  name: "TaskItem",

  components: {
    BaseButton
  },

  props: {
    task: {
      type: Task
      required: true
    }
  },

  // Child components does not need to know anything about their
  // parents. All it needs to do is emit signs for its actions.
  methods: {
    onComplete() {
      this.$emit('complete');
    }, // onComplete

    onUnhide() {
      this.$emit('unhide');
    }, // onUnhide

    onHide() {
      this.$emit('hide');
    }, // onHide

    onRemove() {
      this.$emit('remove');
    }, // onRemove

    onUpdate(evt: any) {
      this.$emit('update', evt);
    }, // onUpdate

    onKeypress(evt: any) {
      this.$emit('keypress', evt);
    } // onKeypress
  }
};
</script>

<style lang="scss" >
.task-item {
  padding: 10px 10px 5px;
  border-bottom: thin solid #ccc;
  display: flex;
  align-content: center;

  &:hover {
    background-color: #f9f9f9;
  } // .task-item:hover

  .btn,
  .task-text {
    display: inline-block;
    margin: 0;
    padding: 0;
  } // .btn, .task-text

  > input,
  .task-text {
    flex: 10;
  } // .task-text

  .btn {
    cursor: pointer !important;
    min-width: auto;
    flex: 1;

    > .eva {
      font-size: 2rem;
    } // .btn > .eva

    &.checkmark {
      color: #d5d5d5;
      cursor: pointer;

      &:hover {
        color: #bbb;
      } // .btn.checkmark:hover

      > .eva {
        font-size: 2.5rem;
      } // .btn.checkmark > .eva
    } // .btn.checkmark
  }

  &.done {
    background-color: #f2f2f2;

    .task-text {
      color: #bbb;
      text-shadow: white 1px 1px 1px;
      font-weight: bold;
      font-style: italic;
      text-decoration: line-through;
    }

    .btn.checkmark {
      color: #90ee90;
      font-weight: bolder;

      &:hover {
        color: darken(#90ee90, 10%);
      } // .btn.checkmark:hover

      > .eva::after {
        content: "";
        display: block;
        border: 2px solid #90ee90;
        width: 25px;
        height: 25px;
        border-radius: 25px;
        position: absolute;
        top: -2px;
        left: -2px;
      } // .btn.checkmark > .eva::after
    } // .btn.checkmark
  } // .task-item.done
} // .task-item
</style>

