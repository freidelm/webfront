import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { UsersComponent } from '../administration/users/users.component';
import { RolesComponent } from '../administration/roles/roles.component';
import { CategoriesComponent } from '../settings/categories/categories.component';
import { AuthorsComponent } from '../settings/authors/authors.component';
import { AreasComponent } from '../settings/areas/areas.component';
import { SectionsComponent } from '../settings/sections/sections.component';


@NgModule({
  declarations: [DashboardComponent, UsersComponent, RolesComponent, CategoriesComponent, AuthorsComponent, AreasComponent, SectionsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
