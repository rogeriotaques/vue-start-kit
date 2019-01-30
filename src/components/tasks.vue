// Vue Start Kit
// This component renders a list of tasks.
// @author Rogerio Taques (hello@abtz.co)
// @license MIT

<template lang="pug">
  #tasks
    .field
      input(
        type="text",
        placeholder="Type yout next task and hit enter...",
        autofocus,
        v-on:change="addNewTask($event)"
      )

    p.place-right.mb-0
      button(v-on:click="removeAll()").btn.link.small.align-right.m-0.p-0 Remove all

    p.place-left.mb-0 {{countTotalTasks}} tasks listed.

    br(style="clear: both;")

    p(v-if="countTotalTasks === 0 && isDataLoaded").alert.align-center
      span Hooray! No open tasks. <br >
      span.secondary <a href="javascript:location.reload();">Refresh the browser</a> to see all the tasks again.

    div(v-if="!isDataLoaded").align-center
      div(data-label="Loading ...").spinner

    dl.mt-0
      dt(
        v-for="task in getTasks",
        v-bind:key="task.id",
        v-bind:class="{complete: task.complete}"
      ).task-item.pr-0
        span(
          v-if="!task.editing",
          v-on:click="startEditing({task, flag: true})"
        ).task-text {{task.text}}

        input(
          type="text",
          placeholder="Empty will remove the task ...",
          v-if="task.editing",
          v-bind:id="`task-${task.id}`",
          v-bind:value="task.text",
          v-on:blur="startEditing({task, flag: false})",
          v-on:input="evt => updateTask(task, evt)",
          v-on:keypress="evt => stopEditing(task, evt)"
        )

        span.place-right.align-right
          button(
            v-if="!task.complete",
            v-on:click="markAsDone(task, !task.complete)",
            tooltip="Mark as done "
          ).btn.link.small.p-0.my-0.with-tooltip
            i.fas.fa-check

          button(
            v-if="task.complete",
            v-on:click="markAsDone(task, !task.complete)",
            tooltip="Mark as open"
          ).btn.link.small.p-0.my-0.with-tooltip
            i.fas.fa-times

          button(v-on:click="remove(task.id)", tooltip="Remove task" ).btn.link.small.p-0.my-0.with-tooltip
            i.far.fa-trash-alt
</template>

<script lang="ts">
import { Task } from "~/domain/interfaces";
import { mapGetters } from "vuex";

export default {
  name: "Tasks",

  computed: {
    // Mapping the getters is way easier than the example below.
    ...mapGetters(["isDataLoaded", "countTotalTasks", "getTasks"])

    // Instead of mapping your could write it like this:
    //
    // isDataLoaded(): boolean {
    //   return this.$store.getters.isDataLoaded;
    // },
    // countTotalTasks(): number {
    //   return this.$store.getters.countTotalTasks;
    // },
    // getTasks(): Array<Task> {
    //   return this.$store.getters.getTasks;
    // }
  },

  // All the component methods
  methods: {
    startEditing(payload: { task: Task; flag: boolean }): void {
      this.$store.dispatch("updateTask", {
        task: payload.task,
        data: { editing: payload.flag }
      });

      if (payload.flag) {
        setTimeout(() => {
          const target: any = document.getElementById(
            `task-${payload.task.id}`
          );
          target.select();
          target.focus();
        }, 50);
      }
    },

    stopEditing(task: Task, evt: any) {
      const code = evt.keyCode || evt.which;

      if (code === 13 /* enter */) {
        this.$store.dispatch("updateTask", { task, data: { editing: false } });
      }
    },

    updateTask(task: Task, evt: any) {
      this.$store.dispatch("updateTask", {
        task,
        data: { text: evt.target.value }
      });
    },

    markAsDone(task: Task, complete: boolean): void {
      this.$store.dispatch("updateTask", { task, data: { complete } });
    },

    remove(id: number) {
      this.$store.dispatch("removeSingleTask", id);
    },

    removeAll() {
      this.$store.dispatch("removeAllTasks");
    },

    addNewTask(event: any) {
      this.$store.dispatch("addNewTask", event.target.value);
      event.target.value = "";
    }
  }
};
</script>


<style lang="scss" >
.task-item {
  border: thin solid #ccc;
  padding: 0 20px;

  &:hover {
    background-color: #f9f9f9;
  }

  input {
    width: 60%;
  }
}

.task-item,
.task-text {
  line-height: 44px;

  &.complete {
    text-decoration: line-through;
    font-style: italic;
  }
}

button {
  cursor: pointer !important;
}
</style>

