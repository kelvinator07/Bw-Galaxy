import { Component, OnInit } from '@angular/core';
import {UserService} from "../_services/user.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  content: string;
  loading: boolean;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 5000);

    this.userService.getPublicContent().subscribe(
      data => {
        console.log('Data ', data);
        this.content = data;
      },
      err => {
        this.content = err.error;
        // this.content = err.message;
      }
    );
  }

}
