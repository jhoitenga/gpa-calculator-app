/*
 * Title: base-layout.component.ts
 * Author: Jennifer Hoitenga
 * Date: September 20, 2023
 * Sources Used:
 * Angular Tutorial for Beginners: Layout Pages video by Professor Krasso (https://www.youtube.com/watch?v=9AsogopS9YM)
 * Angular Tutorial for Beginners: Reactive Forms video by Professor Krasso (https://www.youtube.com/watch?v=OFBL4bKno_s)
 */

import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css'],
})
export class BaseLayoutComponent implements OnInit {
  assignment: string;
  constructor(private cookieService: CookieService, private router: Router) {
    // Initialize the assignment property
    this.assignment = 'GPA Calculator';
  }

  ngOnInit(): void {}

  // Signs the user out by deleting all cookies and navigating to the sign-in page.
  signOut() {
    this.cookieService.deleteAll(); // Delete all cookies.
    this.router.navigate(['/session/sign-in']); // Navigate to the sign-in page.
  }
}
