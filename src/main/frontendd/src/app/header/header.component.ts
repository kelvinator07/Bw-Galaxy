import {Component, OnDestroy, OnInit} from '@angular/core';
import {TokenStorageService} from "../_services/token-storage.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs/internal/Subscription";
import {AuthService} from "../_services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  username: string;
  message: boolean;

  constructor(private tokenStorageService: TokenStorageService,
              private router: Router,
              private authService: AuthService) {

    this.authService.currentUser.subscribe(value => {
      if (value) {
        this.isLoggedIn = true;
        this.username = value.username;
        this.showAdminBoard = value.roles.includes('ROLE_ADMIN');
      }
    })
  }

  ngOnInit() {
  }

  logout() {
    // debugger;
    this.authService.logout();
    this.router.navigate(["/login"])
    // window.location.reload();
  }

}
