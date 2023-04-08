type Nullable<T> = T | null;

export interface Task {
  id: string;
  text: string;
  done: boolean;
}

export interface State {
  task: Nullable<Task>;
  tasks: Task[];
  loading: boolean;
}
