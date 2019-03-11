// Vue Start Kit
// This component renders a list of tasks.
// @author Rogerio Taques (hello@abtz.co)
// @license MIT

<template lang="pug">
  #tasks
    div.mt-20.tasks-header
      p.counter.place-left.mb-0
        base-button(
          tooltip="Mark all as done"
          v-bind:click="() => complete()"
        ).link.small.check-all.with-tooltip.bottom
          i.eva.eva-checkmark-outline

        span {{countTotalTasks}} tasks listed.

      p(v-if="isDataLoaded && countTotalTasks > 0").place-right.mb-0
        base-button(
          tooltip="Remove All"
          v-bind:click="() => remove()"
        ).link.small.with-tooltip.bottom.remove-all
          i.eva.eva-trash-outline

      br(style="clear: both;")

    .field.mb-0.secondary-background
      input(
        type="text",
        placeholder="Type yout next task and hit enter...",
        autofocus,
        v-on:change="add($event)"
      )

    base-spinner(v-if="!isDataLoaded").mt-30

    p(v-if="isDataLoaded && countTotalTasks === 0").alert.info.align-center.mt-30
      span Hooray! No open tasks. <br >
      span.secondary <a href="javascript:location.reload();">Refresh the browser</a> to see all the tasks again.

    dl(v-if="isDataLoaded && countTotalTasks > 0").tasks.mt-0
      task-item(
        v-for="task in getTasks()",
        v-bind:task="task"
        v-on:complete="() => complete(task)"
        v-on:unhide="() => edit({task, editing: true})"
        v-on:hide="() => edit({task, editing: false})"
        v-on:update="(evt) => update(task, evt)"
        v-on:keypress="(evt) => keypressed(task, evt)"
        v-on:remove="() => remove(task.id)"
      )
</template>

<script lang="ts">
import { Task } from "~/domain/interfaces";
import { mapGetters } from "vuex";
import BaseSpinner from "~/components/base/spinner.vue";
import BaseButton from "~/components/base/button.vue";
import TaskItem from "~/components/context/task-item.vue";
import { getTasks } from "../../domain/network";

export default {
  name: "Tasks",

  components: {
    BaseButton,
    BaseSpinner,
    TaskItem
  },

  computed: {
    // Mapping the getters is the easiest way of get common computed data
    ...mapGetters(["isDataLoaded", "countTotalTasks"])
  },

  // All the component methods
  methods: {
    getTasks(): Array<Task> {
      return this.$store.state.tasks;
    }, // getTasks

    remove(id?: number): void {
      if (id) {
        this.$store.dispatch("removeSingleTask", { id });
      } else {
        this.$store.dispatch("removeAllTasks");
      }
    }, // remove

    complete(task?: Task): void {
      if (task) {
        this.$store.dispatch("updateTask", {
          task,
          data: { complete: !task.complete }
        });
      } else {
        const { tasks } = this.$store.state;

        tasks.forEach((task: Task) => {
          this.$store.dispatch("updateTask", {
            task,
            data: { complete: true }
          });
        });
      }
    }, // complete

    edit(payload: { task: Task; editing: boolean }): void {
      this.$store.dispatch("updateTask", {
        task: payload.task,
        data: { editing: payload.editing }
      });

      if (payload.editing) {
        // If editing (visible input), put the focus on it.
        // Using timeout to workaround the timing to display it.
        setTimeout(() => {
          const target: any = document.getElementById(
            `task-${payload.task.id}`
          );

          target.select();
          target.focus();
        }, 50);
      }
    }, // edit

    keypressed(task: Task, evt: any) {
      const code = evt.keyCode || evt.which;

      if (code === 13) {
        // Always the ENTER key is pressed
        this.$store.dispatch("updateTask", { task, data: { editing: false } });
      }
    }, // keypressed

    update(task: Task, evt: any) {
      this.$store.dispatch("updateTask", {
        task,
        data: { text: evt.target.value }
      });
    }, // update

    add(event: any) {
      this.$store.dispatch("addNewTask", event.target.value);
      event.target.value = "";
    } // add
  }
};
</script>


<style lang="scss" >
// Fixture for SeedCSS tooltip
// Not needed after 2.1.2
.with-tooltip {
  &::before,
  &::after {
    z-index: 100;
  }
}

.field {
  padding: 20px;
  border: thin solid #4b70b4 !important;
  background: #4b70b4 !important;
  position: relative;
  z-index: 20;
} // .field

.counter {
  line-height: 31px;
} // .counter

.check-all,
.remove-all {
  margin: 0;
  min-width: auto;
  cursor: pointer;
} // .remove-all

.tasks {
  border: thin solid #ccc;
  position: relative;
  z-index: 6;

  &-header {
    border: thin solid #ccc;
    border-bottom: 0;

    .eva {
      font-size: 2rem;
      color: #aaa;
    }
  } // .tasks-header

  &::before,
  &::after {
    content: "";
    display: block;
    position: relative;
    border-bottom: thin solid #aaa;
    height: 3px;
  }

  &::before {
    border: {
      left: thin solid #ccc;
      right: thin solid #ccc;
    }
    background: #f1f1f1;
    position: absolute;
    top: 100%;
    z-index: 4;
    width: calc(100% - 2px);
  }

  &::after {
    width: 100%;
    background: #f5f5f5;
    border-radius: 0 5px 5px 0;
    z-index: 2;
  }
} // .tasks
</style>

