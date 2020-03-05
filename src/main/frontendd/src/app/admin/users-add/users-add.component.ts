import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../_services/auth.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-users-add',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.css']
})
export class UsersAddComponent implements OnInit {

  form: any = {};
  isSuccessful: boolean;
  isSignUpFailed: boolean;
  errorMessage = '';
  role: string[] = [];
  isLoading: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    this.isLoading = true;
    this.role[0] = this.form.role;
    this.form.role = this.role;
    this.form.username = this.form.username.toLowerCase();
    this.authService.register(this.form).subscribe(
      data => {
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        f.resetForm();
        this.isLoading = false;
      },
      error => {
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
        this.isLoading = false;
      }
    );
  }
}
