/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PathService } from './path.service';

describe('PathService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PathService]
    });
  });

  it('should ...', inject([PathService], (service: PathService) => {
    expect(service).toBeTruthy();
  }));
});
