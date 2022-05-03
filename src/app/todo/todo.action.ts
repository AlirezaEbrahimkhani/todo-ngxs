import { ITodo } from './todo.state';

export namespace Todo {
  export class Add {
    static readonly type = '[Todo] Add';
    constructor(public payload: string) {}
  }

  export class GetAll {
    static readonly type = '[Todo] Get All';
  }

  export class Update {
    static readonly type = '[Todo] Update';
    constructor(public payload: ITodo) {}
  }

  export class Delete {
    static readonly type = '[Todo] Delete';
    constructor(public payload: string) {}
  }
}
