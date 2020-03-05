import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TasksComponent} from "./tasks/tasks.component";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {UserComponent} from "./user/user.component";
import {AdminComponent} from "./admin/admin.component";
import {RegisterComponent} from "./register/register.component";
import {TasksAddComponent} from "./admin/tasks-add/tasks-add.component";
import {TasksListComponent} from "./admin/tasks-list/tasks-list.component";
import {UsersAddComponent} from "./admin/users-add/users-add.component";
import {AuthGuard} from "./_guards/auth.guard";
import {AdminAuthGuard} from "./_guards/admin-auth.guard";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // { path: 'profile', component: ProfileComponent },
  { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
  { path: 'admin/users/new', component: UsersAddComponent, canActivate: [AuthGuard, AdminAuthGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard, AdminAuthGuard] },
  { path: 'admin/tasks/new', component: TasksAddComponent, canActivate: [AuthGuard, AdminAuthGuard] },
  { path: 'admin/tasks', component: TasksListComponent, canActivate: [AuthGuard, AdminAuthGuard] },
  { path: 'task', component: TasksComponent, canActivate: [AuthGuard, AdminAuthGuard] },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
