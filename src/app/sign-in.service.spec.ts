/*
 * Title: sign-in.service.spec.ts
 * Author: Jennifer Hoitenga
 * Date: September 20, 2023
 * Sources Used:
 * Angular Tutorial for Beginners: Layout Pages video by Professor Krasso (https://www.youtube.com/watch?v=9AsogopS9YM)
 * Angular Tutorial for Beginners: Reactive Forms video by Professor Krasso (https://www.youtube.com/watch?v=OFBL4bKno_s)
 */

import { TestBed } from '@angular/core/testing';

import { SignInService } from './sign-in.service';

describe('SignInService', () => {
  let service: SignInService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignInService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
