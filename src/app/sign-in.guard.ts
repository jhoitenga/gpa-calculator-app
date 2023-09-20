/*
 * Title: sign-in.guard.ts
 * Author: Jennifer Hoitenga
 * Date: September 20, 2023
 * Sources Used:
 * Angular Tutorial for Beginners: Layout Pages video by Professor Krasso (https://www.youtube.com/watch?v=9AsogopS9YM)
 * Angular Tutorial for Beginners: Reactive Forms video by Professor Krasso (https://www.youtube.com/watch?v=OFBL4bKno_s)
 */

import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SignInGuard implements CanActivate {
  constructor(private router: Router, private cookieService: CookieService) {}
  // Guard that checks whether a session user is authenticated.
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const sessionUser = this.cookieService.get('session_user');

    if (sessionUser) {
      // User is authenticated; allow access to the route.
      return true;
    } else {
      // User is not authenticated; navigate to the sign-in page and deny access.
      this.router.navigate(['/session/sign-in']);
      return false;
    }
  }
}
