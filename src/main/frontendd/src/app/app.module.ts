import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import {authInterceptorProviders} from "./_auth/auth.interceptor";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {TasksAddComponent} from "./admin/tasks-add/tasks-add.component";
import {TasksListComponent} from "./admin/tasks-list/tasks-list.component";
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { UsersAddComponent } from './admin/users-add/users-add.component';
import {MustMatchDirective} from "./utils/must-match.directive";

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TasksAddComponent,
    TasksListComponent,
    LoginComponent,
    HomeComponent,
    UserComponent,
    AdminComponent,
    HeaderComponent,
    RegisterComponent,
    UsersAddComponent,
    MustMatchDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
