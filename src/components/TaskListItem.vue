<!--
Vue Start Kit
This component renders the task item.

@author Rogerio Taques
@license MIT
-->

<template lang="pug">
  div(
    :class="{'task-list-item--done': task.complete}",
    v-bind="$attrs"
  ).task-list-item
    s-button(
      tooltip="Mark as done",
      size="mini"
      icon,
      @click="$emit('complete', $event)"
    ).task-list-item__checkbox
      s-icon(
        :name="task.complete ? 'checkmark-circle' : 'checkmark'",
        :color="task.complete ? 'green' : 'grey'"
      )

    div(
      v-if="!task.editing"
      @click="$emit('unhide', $event)"
    ).task-list-item__text {{ task.text }}

    s-input(
      v-if="task.editing",
      :id="`task-${task.id}`",
      placeholder="Empty will remove the task ...",
      autofocus,
      v-model="task.text",
      @blur="$emit('hide', $event)",
      @keypress="$emit('keypress', $event)"
    ).task-list-item__input

    s-button(
      tooltip="Remove task",
      role="delete",
      size="mini"
      icon,
      @click="$emit('remove', $event)"
    ).task-list-item__remove
      s-icon(name="trash", color="red")
</template>

<script lang="ts">
import { Task } from '~/domain/interfaces';

export default {
  name: 'TaskListItem',

  props: {
    task: {
      type: Object as () => Task,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~seed-vue/src/styles/colors';

.task-list-item {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  height: 50px;
  padding: 0 8px;

  &:not(:first-child) {
    border-top: 1px solid #d2d2d2;
  }

  &__checkbox,
  &__text,
  &__input,
  &__remove {
    flex: 1;
  }

  &__checkbox,
  &__remove {
    max-width: 24px;

    &.s-button {
      box-shadow: none;

      &:hover,
      &:active,
      &:focus {
        box-shadow: none;
      }

      &:hover {
        background-color: lighten($c-grey-light, 8%);
      }
    }
  }

  &__text,
  &__input {
    margin: 0 16px;
  }

  &__input {
    transform: translateY(2px);
  }

  &--done {
    .task-list-item__text {
      font-style: italic;
      text-decoration: line-through;
      color: $c-grey-dark;
    }
  }
}
</style>
