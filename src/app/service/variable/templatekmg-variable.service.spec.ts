import { TestBed } from '@angular/core/testing';

import { TemplatekmgVariableService } from './templatekmg-variable.service';

describe('TemplatekmgVariableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TemplatekmgVariableService = TestBed.get(TemplatekmgVariableService);
    expect(service).toBeTruthy();
  });
});
