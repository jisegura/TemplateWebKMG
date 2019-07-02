import { TestBed } from '@angular/core/testing';

import { UrlFormatService } from './url-format.service';

describe('UrlFormatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UrlFormatService = TestBed.get(UrlFormatService);
    expect(service).toBeTruthy();
  });
});
