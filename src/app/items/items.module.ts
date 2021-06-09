import { AuthGuard } from './../_auth/guards/auth.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { ItemAddEditComponent } from './items-add-edit/items-add-edit.component';
import { ItemEditComponent } from './items-edit/items-edit.component';
import { ItemsListItemComponent } from './items-list-item/items-list-item.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemsComponent } from './items.component';

const routes: Routes = [
  { path: 'items', component: ItemsComponent, canActivate: [AuthGuard] },
  { path: 'items-edit/:id', component: ItemEditComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ItemsComponent,
    ItemsListComponent,
    ItemsListItemComponent,
    ItemEditComponent,
    ItemAddEditComponent,
  ]
})
export class ItemsModule { }
