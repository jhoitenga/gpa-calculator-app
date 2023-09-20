/*
 * Title: sign-in.service.ts
 * Author: Jennifer Hoitenga
 * Date: September 20, 2023
 * Sources Used:
 * Angular Tutorial for Beginners: Layout Pages video by Professor Krasso (https://www.youtube.com/watch?v=9AsogopS9YM)
 * Angular Tutorial for Beginners: Reactive Forms video by Professor Krasso (https://www.youtube.com/watch?v=OFBL4bKno_s)
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SignInService {
  studentIds: Array<number>;
  constructor() {
    // Initialize the array of valid student IDs.
    this.studentIds = [1007, 1008, 1009, 1010, 1011, 1012];
  }

  // Validates a student ID against the list of valid IDs.
  validate(studentId: number) {
    // Check if the provided student ID exists in the list of valid IDs.
    return this.studentIds.some((id) => id === studentId);
  }
}
