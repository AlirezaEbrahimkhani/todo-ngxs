import { ChangeDetectionStrategy } from '@angular/core';
import { Component, Input } from '@angular/core';
import { Store } from '@ngxs/store';
import { Todo } from '../todo.action';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoCardComponent {
  @Input() config!: { id: string; done: boolean; text: string };

  constructor(private store: Store) {}

  checkChanged($event: boolean) {
    this.store.dispatch(new Todo.Update({ ...this.config, done: $event }));
  }

  onDelete(id: string) {
    this.store.dispatch(new Todo.Delete(id));
  }
}
