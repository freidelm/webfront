import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import { UsersComponent } from '../administration/users/users.component';
import { RolesComponent } from '../administration/roles/roles.component';
import { CategoriesComponent } from '../settings/categories/categories.component';
import { AuthorsComponent } from '../settings/authors/authors.component';
import { AreasComponent } from '../settings/areas/areas.component';
import { SectionsComponent } from '../settings/sections/sections.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'roles',
    component: RolesComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: 'authors',
    component: AuthorsComponent
  },
  {
    path: 'areas',
    component: AreasComponent
  }
  ,
  {
    path: 'sections',
    component: SectionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
