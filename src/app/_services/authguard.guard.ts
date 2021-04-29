import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { LoginService } from '../login/services/login.service';


@Injectable({
    providedIn: 'root'
})

export class AuthguardGuard implements CanActivate {
    constructor( private router: Router, private loginService: LoginService) { }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        const routeurl: string = state.url;
        return this.isLogin(routeurl);
    }

    isLogin(routeurl: string) {
        if (this.loginService.isLoggedIn()) {
            return true;
        }

        this.loginService.redirectUrl = routeurl;
        this.router.navigate(['/login'], { queryParams: { returnUrl: routeurl } });
    }
}