<!--
Vue Start Kit
This component renders a list of tasks.

@author Rogerio Taques
@license MIT
-->

<template lang="pug">
  section.tasks
    .tasks__header
      s-button(
        class="tasks__header__button tasks__header__button--check-all"
        tooltip="Mark all as done",
        role="mark-all",
        size="mini",
        icon,
        @click="complete"
      )
        s-icon(name="done-all")

      s-button(
        :disabled="!isDataLoaded || countTotalTasks === 0",
        class="tasks__header__button tasks__header__button--delete-all",
        tooltip="Remove All",
        role="delete-all",
        size="mini",
        icon,
        @click="remove"
      )
        s-icon(name="trash", color="red")

      span.tasks__header__counter {{ countTotalTasks }} tasks listed.

      br(style="clear: both;")

      s-input(
        class="tasks__header__input"
        placeholder="Type yout next task and hit enter...",
        autofocus,
        @keydown.enter="add($event)"
      )

      s-spinner(v-if="!isDataLoaded", size="mini", speed="fast", color="secondary")

    .tasks__list
      s-alert(
        v-if="isDataLoaded && countTotalTasks === 0",
        color="green",
        title="Hooray! No open tasks"
      )
        a(href="javascript:location.reload();") Refresh the browser
        span &nbsp;to see all the tasks again.

      transition-group(
        v-if="isDataLoaded && countTotalTasks > 0",
        name="fade",
        tag="dl",
        appear
      )
        task-item(
          v-for="task in tasks",
          :key="task.id"
          :task="task"
          @complete="complete(task)"
          @unhide="edit({task, editing: true})"
          @hide="edit({task, editing: false})"
          @update="update(task, $event)"
          @keypress="keypressed(task, $event)"
          @remove="remove(task.id)"
        )
</template>

<script lang="ts">
import { mapGetters } from 'vuex';

// import { Task } from '~/domain/interfaces';

export default {
  name: 'TaskList',

  components: {
    TaskItem: () => import('~/components/tasks/task-item.vue')
  },

  computed: {
    // Mapping the getters is the easiest way of get common computed data.
    ...mapGetters(['isDataLoaded', 'countTotalTasks']),

    tasks(): Task[] {
      return this.$store.state.tasks;
    } // tasks
  },

  async created() {
    try {
      // When this component is created, dispatch an action that calls the api.
      this.$store.dispatch('getFromAPI');
    } catch (error) {
      //
    }
  },

  // All the component methods.
  methods: {
    remove(id?: number): void {
      if (id) {
        this.$store.dispatch('removeSingleTask', { id });
      } else {
        this.$store.dispatch('removeAllTasks');
      }
    }, // remove

    complete(task?: Task): void {
      if (task) {
        this.$store.dispatch('updateTask', {
          task,
          data: { complete: !task.complete }
        });
      } else {
        const { tasks } = this.$store.state;
        tasks.forEach((task: Task) => {
          this.$store.dispatch('updateTask', {
            task,
            data: { complete: true }
          });
        });
      }
    }, // complete

    edit(payload: { task: Task; editing: boolean }): void {
      this.$store.dispatch('updateTask', {
        task: payload.task,
        data: { editing: payload.editing }
      });
      if (payload.editing) {
        // If editing (visible input), put the focus on it.
        // Using timeout to workaround the timing to display it.
        setTimeout(() => {
          const target: any = document.getElementById(`task-${payload.task.id}`);
          target.select();
          target.focus();
        }, 50);
      }
    }, // edit

    keypressed(task: Task, evt: any): void {
      const code: number = evt.keyCode || evt.which;
      if (code === 13) {
        // Always the ENTER key is pressed
        this.$store.dispatch('updateTask', { task, data: { editing: false } });
      }
    }, // keypressed

    update(task: Task, evt: any): void {
      this.$store.dispatch('updateTask', {
        task,
        data: { text: evt.target.value, complete: false }
      });
    }, // update

    add(event: any): void {
      this.$store.dispatch('addNewTask', event.target.value);
      event.target.value = '';
    } // add
  }
};
</script>

<style lang="scss" scoped>
@import '~seed-vue/src/styles/colors';

.tasks {
  &__list,
  &__header {
    position: relative;
    border: 1px solid #d5d5d5;
    box-sizing: border-box;
  }

  &__header {
    padding: 16px 8px;
    margin: 24px 0 0;
    border-bottom: 0;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;

    &__button:not(:first-child) {
      margin-left: 8px;
    }

    &__counter {
      position: absolute;
      right: 8px;
    }

    &__input {
      &.s-input {
        margin: 8px 0 0;
      }
    }
  }

  &__list {
    position: relative;
    margin: 0 0 24px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    box-sizing: content-box;
    z-index: 1;

    dl {
      margin: 0;
    }

    &::before,
    &::after {
      content: '';
      display: block;
      position: absolute;
      border: 1px solid #d2d2d2;
      border-top: 0;
      border-radius: 4px;
      height: 4px;
      width: calc(100% - 1px);
    }

    &::before {
      z-index: 2;
      bottom: -4px;
      background-color: #f5f5f5;
    }

    &::after {
      z-index: 3;
      bottom: -8px;
      background-color: #e5e5e5;
    }
  }
}

// @keyframes bounce-up {
//   from {
//     margin-top: -25px;
//     opacity: 0;
//     z-index: -1;
//   }
//   to {
//     margin-top: 0;
//     opacity: 1;
//     z-index: inherit;
//   }
// }

// // Animate when adding the element
// .fade-enter-active {
//   animation: bounce-up 0.3s;
// }

// // Animate when removing the element
// .fade-leave-active {
//   animation: bounce-up 0.3s reverse;
// }

// .field {
//   padding: 20px;
//   border: thin solid #4b70b4 !important;
//   background: #4b70b4 !important;
//   position: relative;
//   z-index: 20;
// } // .field

// .counter {
//   line-height: 31px;
// } // .counter

// .check-all,
// .remove-all {
//   margin: 0 10px;
//   min-width: auto;
//   cursor: pointer;
//   color: #aaa;

//   &[role='mark-all'] {
//     &:hover {
//       color: #90ee90 !important;
//     }
//   }

//   &[role='delete-all'] {
//     &:hover {
//       color: red !important;
//     }
//   }
// } // .remove-all

// .tasks {
//   border: thin solid #ccc;
//   position: relative;
//   z-index: 6;

//   &-header {
//     border: thin solid #ccc;
//     border-bottom: 0;

//     .eva {
//       font-size: 2rem;
//       display: inline-block;
//       vertical-align: middle;
//     }
//   } // .tasks__header

//   &::before,
//   &::after {
//     content: '';
//     display: block;
//     position: relative;
//     border-bottom: thin solid #aaa;
//     height: 3px;
//   }

//   &::before {
//     border: {
//       left: thin solid #ccc;
//       right: thin solid #ccc;
//     }
//     background: #f1f1f1;
//     position: absolute;
//     top: 100%;
//     z-index: 4;
//     width: calc(100% - 2px);
//   }

//   &::after {
//     width: 100%;
//     background: #f5f5f5;
//     border-radius: 0 5px 5px 0;
//     z-index: 2;
//   }
// } // .tasks
</style>
