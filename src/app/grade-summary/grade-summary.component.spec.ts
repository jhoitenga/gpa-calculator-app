/*
 * Title: grade-summary.component.spec.ts
 * Author: Jennifer Hoitenga
 * Date: September 13, 2023
 * Sources Used: Assignment 6.4 Instructions by Professor Krasso
 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeSummaryComponent } from './grade-summary.component';

describe('GradeSummaryComponent', () => {
  let component: GradeSummaryComponent;
  let fixture: ComponentFixture<GradeSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GradeSummaryComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
