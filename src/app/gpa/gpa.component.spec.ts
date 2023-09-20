/*
 * Title: gpa.component.spec.ts
 * Author: Jennifer Hoitenga
 * Date: September 13, 2023
 * Sources Used: Assignment 6.4 Instructions by Professor Krasso
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpaComponent } from './gpa.component';

describe('GpaComponent', () => {
  let component: GpaComponent;
  let fixture: ComponentFixture<GpaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GpaComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
