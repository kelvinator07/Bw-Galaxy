import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {TokenStorageService} from "../_services/token-storage.service";

@Injectable({ providedIn: 'root'})
export class AdminAuthGuard implements CanActivate {

  constructor(private router: Router,
              private tokenStorage: TokenStorageService) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.tokenStorage.getUser().roles;
    if (currentUser.includes('ROLE_ADMIN')) {
      return true;
    }
    this.router.navigate(['/user']);
    return false;
  }

}
