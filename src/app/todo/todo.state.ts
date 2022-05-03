import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Todo } from './todo.action';

export interface ITodo {
  id: string;
  done: boolean;
  text: string;
}

interface TodoStateModel<T> {
  todoList: ITodo[];
}

@State<TodoStateModel<ITodo>>({
  name: 'todos',
  defaults: {
    todoList: [],
  },
})
@Injectable()
export class TodoState {
  @Selector()
  public static getTodos(state: TodoStateModel<ITodo>) {
    return state.todoList;
  }

  @Action(Todo.Add)
  add(ctx: StateContext<TodoStateModel<ITodo>>, { payload }: Todo.Add) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      todoList: [
        ...state.todoList,
        {
          done: false,
          id: Math.random().toString(36).substring(7),
          text: payload,
        },
      ],
    });
  }

  @Action(Todo.GetAll)
  getAllTodos(ctx: StateContext<ITodo>) {
    return ctx.getState();
  }

  @Action(Todo.Update)
  update(ctx: StateContext<TodoStateModel<ITodo>>, { payload }: Todo.Update) {
    const state = ctx.getState().todoList;
    ctx.patchState({
      todoList: [
        ...state.map((todo) => (todo.id === payload.id ? payload : todo)),
      ],
    });
  }

  @Action(Todo.Delete)
  delete(ctx: StateContext<TodoStateModel<ITodo>>, { payload }: Todo.Delete) {
    const state = ctx.getState().todoList;
    ctx.patchState({
      todoList: [...state.filter((todo) => todo.id !== payload)],
    });
  }
}
