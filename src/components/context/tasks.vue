// Vue Start Kit
// This component renders a list of tasks.
// @author Rogerio Taques (hello@abtz.co)
// @license MIT

<template lang="pug">
  #tasks

    //-   .field
    //-     input(
    //-       type="text",
    //-       placeholder="Type yout next task and hit enter...",
    //-       autofocus,
    //-       v-on:change="addNewTask($event)"
    //-     )


    div
      p.counter.place-left.mb-0 {{countTotalTasks}} tasks listed.

      p(v-if="isDataLoaded && countTotalTasks > 0").remove-all.place-right.mb-0
        base-button(v-bind:click="() => remove()").link.small Remove All

      br(style="clear: both;")

    base-spinner(v-if="!isDataLoaded")

    p(v-if="isDataLoaded && countTotalTasks === 0").alert.align-center
      span Hooray! No open tasks. <br >
      span.secondary <a href="javascript:location.reload();">Refresh the browser</a> to see all the tasks again.

    dl(v-if="isDataLoaded && countTotalTasks > 0").tasks.with-shadow
      dt(v-for="task in getTasks()", v-bind:key="task.id").task-item
        base-button.link.small.checkmark
          i.eva.eva-checkmark-outline

        span.task-text {{task.text}}

        base-button(
          tooltip="Remove task",
          v-bind:click="() => remove(task.id)"
        ).link.small.with-tooltip.left.place-right
          i.eva.eva-trash-outline

    //-   dl(v-bind:class="{'tasks-list with-shadow': getTasks.length > 0}").mt-0
    //-     dt(
    //-       v-for="task in getTasks",
    //-       v-bind:key="task.id",
    //-       v-bind:class="{complete: task.complete}"
    //-     ).task-item.pr-0
    //-       span(
    //-         v-if="!task.editing",
    //-         v-on:click="startEditing({task, flag: true})"
    //-       ).task-text {{task.text}}

    //-       input(
    //-         type="text",
    //-         placeholder="Empty will remove the task ...",
    //-         v-if="task.editing",
    //-         v-bind:id="`task-${task.id}`",
    //-         v-bind:value="task.text",
    //-         v-on:blur="startEditing({task, flag: false})",
    //-         v-on:input="evt => updateTask(task, evt)",
    //-         v-on:keypress="evt => stopEditing(task, evt)"
    //-       )

    //-       span.place-right.align-right
    //-         button(
    //-           v-if="!task.complete",
    //-           v-on:click="markAsDone(task, !task.complete)",
    //-           tooltip="Mark as done "
    //-         ).btn.link.small.p-0.my-0.with-tooltip
    //-           i.fas.fa-check

    //-         button(
    //-           v-if="task.complete",
    //-           v-on:click="markAsDone(task, !task.complete)",
    //-           tooltip="Mark as open"
    //-         ).btn.link.small.p-0.my-0.with-tooltip
    //-           i.fas.fa-times
</template>

<script lang="ts">
import { Task } from "~/domain/interfaces";
import { mapGetters } from "vuex";
import BaseSpinner from '~/components/base/spinner.vue';
import BaseButton from '~/components/base/button.vue';

export default {
  name: "Tasks",

  components: {
    BaseButton,
    BaseSpinner
  },

  computed: {
    // Mapping the getters is way easier than the example below.
    ...mapGetters(["isDataLoaded", "countTotalTasks"])

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
    getTasks(): Array<Task> {
      return this.$store.state.tasks;
    },

    remove(id?: number): void {
      if (id) {
        this.$store.dispatch("removeSingleTask", {id});
      } else {
        this.$store.dispatch("removeAllTasks");
      }
    },

    // startEditing(payload: { task: Task; flag: boolean }): void {
    //   this.$store.dispatch("updateTask", {
    //     task: payload.task,
    //     data: { editing: payload.flag }
    //   });

    //   if (payload.flag) {
    //     setTimeout(() => {
    //       const target: any = document.getElementById(
    //         `task-${payload.task.id}`
    //       );
    //       target.select();
    //       target.focus();
    //     }, 50);
    //   }
    // },

    // stopEditing(task: Task, evt: any) {
    //   const code = evt.keyCode || evt.which;

    //   if (code === 13 /* enter */) {
    //     this.$store.dispatch("updateTask", { task, data: { editing: false } });
    //   }
    // },

    // updateTask(task: Task, evt: any) {
    //   this.$store.dispatch("updateTask", {
    //     task,
    //     data: { text: evt.target.value }
    //   });
    // },

    // markAsDone(task: Task, complete: boolean): void {
    //   this.$store.dispatch("updateTask", { task, data: { complete } });
    // },



    // addNewTask(event: any) {
    //   this.$store.dispatch("addNewTask", event.target.value);
    //   event.target.value = "";
    // }
  }
};
</script>


<style lang="scss" >
.counter {
  line-height: 31px;
}

.remove-all {
  margin: 0;
}

.task-item {
  padding: 10px 20px;
  border-bottom: thin solid #ccc;

  &:hover {
    background-color: #f9f9f9;
  }

  .btn {
    cursor: pointer !important;
    margin: 0;
    min-width: auto;

    > .eva {
      font-size: 2rem;
    }

    &.checkmark {
      color: #d5d5d5;
      cursor: pointer;

      &:hover {
        color: #bbb;
      }

      > .eva {
        font-size: 2.5rem;
      }
    }
  }

  .task-text {
    display: inline-block;
    line-height: 40px;
    vertical-align: text-bottom;
  }

//   input {
//     width: 60%;
//   }
}

// .task-item,
// .task-text {
//   line-height: 44px;

//   &.complete {
//     text-decoration: line-through;
//     font-style: italic;
//   }
// }

.tasks {
  position: relative;
  z-index: 6;

  &::before,
  &::after {
    content: "";
    display: block;
    position: relative;
    border-bottom: thin solid #aaa;
    height: 3px;
    width: 100%;
  }

  &::before {
    background: #f1f1f1;
    position: absolute;
    top: 100%;
    z-index: 4;
  }

  &::after {
    background: #f5f5f5;
    border-radius: 0 5px 5px 0;
    z-index: 2;
  }
}

// button {
//   cursor: pointer !important;
// }
</style>

