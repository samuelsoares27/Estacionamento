import { TestBed } from '@angular/core/testing';

import { ServeletService } from './servelet.service';

describe('ServeletService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServeletService = TestBed.get(ServeletService);
    expect(service).toBeTruthy();
  });
});
