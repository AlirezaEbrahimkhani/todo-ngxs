import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from "@angular/material/icon";
import { TodoCardComponent } from './todo-card/todo-card.component';
import { NgxsModule } from '@ngxs/store';
import { TodoState } from './todo.state';

const routes: Routes = [
  {
    path: '',
    component: TodoComponent,
  },
];

const Mat_Modules = [
  MatInputModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatCardModule,
  MatIconModule
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    NgxsModule.forFeature([TodoState]),
    ...Mat_Modules,
  ],
  declarations: [TodoComponent, TodoCardComponent],
})
export class TodoModule {}
