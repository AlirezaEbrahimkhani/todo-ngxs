import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TodoCardComponent } from './todo-card/todo-card.component';

const routes: Routes = [
  {
    path: '',
    component: TodoComponent,
  },
];

const Mat_Modules = [MatInputModule, MatFormFieldModule];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    ...Mat_Modules,
  ],
  declarations: [TodoComponent, TodoCardComponent],
})
export class TodoModule {}
