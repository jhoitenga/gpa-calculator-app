/*
 * Title: sign-in.component.ts
 * Author: Jennifer Hoitenga
 * Date: September 20, 2023
 * Sources Used:
 * Angular Tutorial for Beginners: Layout Pages video by Professor Krasso (https://www.youtube.com/watch?v=9AsogopS9YM)
 * Angular Tutorial for Beginners: Reactive Forms video by Professor Krasso (https://www.youtube.com/watch?v=OFBL4bKno_s)
 */

import { Component, OnInit } from '@angular/core';
import { SignInService } from '../sign-in.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  signinForm: FormGroup; // Form group for the sign-in form.
  errorMessage: string; // Error message to display to the user.
  constructor(
    private router: Router,
    private cookieService: CookieService,
    private fb: FormBuilder,
    private signinService: SignInService
  ) {}

  ngOnInit(): void {
    // Initialize the sign-in form with an empty studentId field.
    this.signinForm = this.fb.group({
      studentId: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[0-9]*$'), // Added a validation pattern of numeric values for Student ID.
        ]),
      ],
    });
  }

  // Method to access the form controls within the sign-in form.
  get form() {
    return this.signinForm.controls;
  }

  // Handles form submission when the user clicks the "Submit" button.
  onSubmit() {
    const formValues = this.signinForm.value;
    const studentId = parseInt(formValues.studentId);

    // Validate the entered student ID using the signinService.
    if (this.signinService.validate(studentId)) {
      // If the student ID is valid, set a session cookie and navigate to the root path.
      this.cookieService.set('session_user', studentId.toString(), 1);
      this.router.navigate(['/']);
    } else {
      // If the student ID is invalid, display an error message.
      this.errorMessage =
        'The student ID you entered is invalid, please try again.';
    }
  }
}
