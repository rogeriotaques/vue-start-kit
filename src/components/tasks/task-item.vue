<!--
Vue Start Kit
This component renders the task item.

@author Rogerio Taques
@license MIT
-->

<template lang="pug">
  dt(
    :key="task.id"
    :class="{'tasks__task-item--done': task.complete}"
  ).tasks__task-item
    s-button(
      tooltip="Mark as done",
      size="mini"
      icon,
      @click="$emit('complete', $event)"
    ).tasks__task-item__checkmark
      s-icon(:name="task.complete ? 'checkmark-circle' : 'checkmark'")

    div(
      v-if="!task.editing"
      @click="$emit('unhide', $event)"
    ).tasks__task-item__text {{ task.text }}

    s-input(
      v-if="task.editing",
      :id="`task-${task.id}`",
      placeholder="Empty will remove the task ...",
      v-model="task.text",
      @blur="$emit('hide', $event)",
      @keypress="$emit('keypress', $event)"
    )

    s-button(
      tooltip="Remove task",
      role="delete",
      size="mini"
      icon,
      @click="$emit('remove', $event)"
    ).tasks__task-item__remove
      s-icon(name="trash")
</template>

<script lang="ts">
export default {
  name: 'TaskItem',

  props: {
    task: {
      type: Object as () => Task,
      required: true
    }
  }
};
</script>

<style lang="scss">
// .task-item {
//   padding: 10px 10px 5px;
//   border-bottom: thin solid #ccc;
//   display: flex;
//   align-content: center;

//   &:hover {
//     background-color: #f9f9f9;
//   } // .task-item:hover

//   .btn,
//   .task-text {
//     display: inline-block;
//     margin: 0;
//     padding: 0;
//   } // .btn, .task-text

//   > input,
//   .task-text {
//     flex: 10;
//   } // .task-text

//   .btn {
//     cursor: pointer !important;
//     min-width: auto;
//     flex: 1;

//     > .eva {
//       font-size: 2rem;
//     } // .btn > .eva

//     &.checkmark {
//       color: #d5d5d5;
//       cursor: pointer;

//       &:active,
//       &:focus,
//       &:hover {
//         color: #bbb !important;
//       } // .btn.checkmark:hover
//     } // .btn.checkmark

//     &[role='delete'] {
//       color: #aaa;

//       &:hover {
//         color: red !important;
//       }
//     }
//   }

//   &.done {
//     background-color: #f2f2f2;

//     .task-text {
//       color: #bbb;
//       text-shadow: white 1px 1px 1px;
//       font-weight: bold;
//       font-style: italic;
//       text-decoration: line-through;
//     }

//     .btn.checkmark,
//     .btn.checkmark:active,
//     .btn.checkmark:focus {
//       color: #90ee90;
//       font-weight: bolder;

//       &:active,
//       &:focus,
//       &:hover {
//         color: darken(#90ee90, 10%) !important;
//       } // .btn.checkmark:hover

//       // > .fa {
//       //   position: relative;

//       //   &::after {
//       //     content: '';
//       //     display: block;
//       //     border: 2px solid #90ee90;
//       //     width: 30px;
//       //     height: 30px;
//       //     border-radius: 25px;
//       //     position: absolute;
//       //     top: -5px;
//       //     left: -5px;
//       //   } // .btn.checkmark > .fa::after
//       // }
//     } // .btn.checkmark
//   } // .task-item.done
// } // .task-item
</style>
