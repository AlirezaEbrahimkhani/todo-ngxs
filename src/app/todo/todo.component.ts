import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Todo } from './todo.action';
import { ITodo, TodoState } from './todo.state';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent implements OnInit {
  @Select(TodoState.getTodos) todoList$!: Observable<ITodo[]>;
  form!: FormGroup;

  constructor(
    private readonly _formBuilder: FormBuilder,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.store.dispatch(new Todo.GetAll());
    this.form = this._formBuilder.group({
      todoName: [''],
    });
  }

  submitForm() {
    const { todoName } = this.form.value;
    this.store.dispatch(new Todo.Add(todoName));
    this.form.reset();
  }
}
