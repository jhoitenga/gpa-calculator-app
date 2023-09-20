/*
 * Title: gpa.component.ts
 * Author: Jennifer Hoitenga
 * Date: September 13, 2023
 * Sources Used: Assignment 6.4 Instructions by Professor Krasso
 */

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.css'],
})
export class GpaComponent implements OnInit {
  @Input() gpaTotal: number; // Input property for receiving the GPA total value
  constructor() {}

  ngOnInit(): void {}
}
