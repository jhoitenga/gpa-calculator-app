/*
 * Title: grade-summary.component.ts
 * Author: Jennifer Hoitenga
 * Date: September 13, 2023
 * Sources Used: Assignment 6.4 Instructions by Professor Krasso
 */

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.css'],
})
export class GradeSummaryComponent implements OnInit {
  @Input() grade: string; // Input property for receiving the grade value
  @Input() course: string; // Input property for receiving the course value

  constructor() {}

  ngOnInit(): void {}
}
