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
        @click="complete()"
      )
        s-icon(name="done-all", color="green")

      s-button(
        :disabled="!isDataLoaded || countTotalTasks === 0",
        class="tasks__header__button tasks__header__button--delete-all",
        tooltip="Remove All",
        role="delete-all",
        size="mini",
        icon,
        @click="remove()"
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

      s-spinner(
        v-if="!isDataLoaded",
        size="mini",
        speed="fast",
        color="secondary",
        text="Loading ..."
      )

    .tasks__list
      s-alert(
        v-if="isDataLoaded && countTotalTasks === 0",
        color="green",
        title="Hooray! No open tasks"
      )
        a(href="javascript:location.reload();") Refresh the browser
        span &nbsp;to see all the tasks again.

      template(v-else)
        transition-group(
          name="list",
          tag="div",
          appear
        ).tasks__list-items
          task-list-item(
            v-for="(task, index) in tasks",
            :key="task.id"
            :task="task"
            @complete="complete(task)"
            @unhide="edit({task, editing: true})"
            @hide="edit({task, editing: false})"
            @update="update(task, $event)"
            @keypress.enter="keypressed(task)"
            @remove="remove(task.id)"
          )
</template>

<script lang="ts">
import { mapGetters, mapActions } from 'vuex';
import { Task } from '~/domain/interfaces';

export default {
  name: 'TaskList',

  components: {
    TaskListItem: () => import('~/components/TaskListItem.vue')
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
      // When this component is created,
      // dispatch a mapped action that calls the api.
      this.getFromAPI();
    } catch (error) {
      //
    }
  },

  // All the component methods.
  methods: {
    ...mapActions(['getFromAPI', 'removeSingleTask', 'removeAllTasks', 'updateTask', 'addNewTask']),

    remove(id?: number): void {
      if (id) {
        this.removeSingleTask({ id });
        return;
      }

      this.removeAllTasks();
    }, // remove

    complete(task?: Task): void {
      if (task) {
        this.updateTask({
          task,
          data: { complete: !task.complete }
        });

        return;
      }

      const { tasks } = this.$store.state;

      tasks.forEach((task: Task) => {
        this.updateTask({
          task,
          data: { complete: true }
        });
      });
    }, // complete

    edit(payload: { task: Task; editing: boolean }): void {
      this.updateTask({
        task: payload.task,
        data: { editing: payload.editing }
      });
    }, // edit

    keypressed(task: Task): void {
      // Whenever the ENTER key is pressed
      this.updateTask({ task, data: { editing: false, complete: false } });
    }, // keypressed

    update(task: Task, evt: any): void {
      this.updateTask({
        task,
        data: { text: evt.target.value, complete: false }
      });
    }, // update

    add(event: any): void {
      this.addNewTask(event.target.value);
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

    &__button {
      &.s-button.s-button--icon.s-button--mini {
        border: 0;
        box-shadow: none;

        &:hover {
          background-color: lighten($c-grey-light, 8%);
        }
      }

      &:not(:first-child) {
        margin-left: 8px;
      }
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
    }

    &::after {
      z-index: 3;
      bottom: -8px;
    }
  }

  ::v-deep {
    .list-enter-active,
    .list-leave-active {
      transition: all 0.2s linear;
    }

    .list-enter,
    .list-leave-to /* .list-leave-active below version 2.1.8 */ {
      opacity: 0;
      transform: translateX(-8px);
    }
  }
}
</style>
