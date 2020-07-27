import { TestBed } from '@angular/core/testing';

import { DashboardkmgService } from './dashboardkmg.service';

describe('DashboardkmgService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DashboardkmgService = TestBed.get(DashboardkmgService);
    expect(service).toBeTruthy();
  });
});
