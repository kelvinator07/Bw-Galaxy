import { Component, OnInit } from '@angular/core';
import {AuthService} from "../_services/auth.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
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
        this.isLoading = false;
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        f.resetForm();
      },
      error => {
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
        this.isLoading = false;
      }
    );
  }
}
