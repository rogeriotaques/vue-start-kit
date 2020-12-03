<!--
Vue Start Kit
This component renders the task item.

@author Rogerio Taques
@license MIT
-->

<template lang="pug">
  dt(
    :key="task.id"
    :class="{done: task.complete}"
  ).task-item
    seed-button(
      :click="onComplete"
      tooltip="Mark as done"
    ).btn.link.small.checkmark.with-tooltip.bottom
      i(
        :class="{
          'eva': true,
          'eva-checkmark-outline': !task.complete,
          'eva-checkmark-circle-outline': task.complete
        }"
      )

    div(
      v-if="!task.editing"
      @click="onUnhide"
    ).task-text {{ task.text }}

    input(
      v-if="task.editing",
      :id="`task-${task.id}`",
      :value="task.text",
      type="text",
      placeholder="Empty will remove the task ...",
      @blur="onHide",
      @input="onUpdate($event)",
      @keypress="onKeypress($event)"
    )

    seed-button(
      tooltip="Remove task",
      role="delete",
      :click="onRemove"
    ).link.small.with-tooltip.bottom.place-right
      i.eva.eva-trash-outline
</template>

<script lang="ts">
import { Task } from '~/domain/interfaces';
import SeedButton from '~/components/seed/button.vue';

export default {
  name: 'TaskItem',

  components: {
    SeedButton
  },

  props: {
    task: {
      type: Object as () => Task,
      required: true
    }
  },

  // Child components does not need to know anything about their
  // parents. All it needs to do is emit signs for its actions.
  methods: {
    onComplete(): void {
      this.$emit('complete');
    }, // onComplete

    onUnhide(): void {
      this.$emit('unhide');
    }, // onUnhide

    onHide(): void {
      this.$emit('hide');
    }, // onHide

    onRemove(): void {
      this.$emit('remove');
    }, // onRemove

    onUpdate(evt: any): void {
      this.$emit('update', evt);
    }, // onUpdate

    onKeypress(evt: any): void {
      this.$emit('keypress', evt);
    } // onKeypress
  }
};
</script>

<style lang="scss">
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

      &:active,
      &:focus,
      &:hover {
        color: #bbb !important;
      } // .btn.checkmark:hover
    } // .btn.checkmark

    &[role='delete'] {
      color: #aaa;

      &:hover {
        color: red !important;
      }
    }
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

    .btn.checkmark,
    .btn.checkmark:active,
    .btn.checkmark:focus {
      color: #90ee90;
      font-weight: bolder;

      &:active,
      &:focus,
      &:hover {
        color: darken(#90ee90, 10%) !important;
      } // .btn.checkmark:hover

      // > .fa {
      //   position: relative;

      //   &::after {
      //     content: '';
      //     display: block;
      //     border: 2px solid #90ee90;
      //     width: 30px;
      //     height: 30px;
      //     border-radius: 25px;
      //     position: absolute;
      //     top: -5px;
      //     left: -5px;
      //   } // .btn.checkmark > .fa::after
      // }
    } // .btn.checkmark
  } // .task-item.done
} // .task-item
</style>
