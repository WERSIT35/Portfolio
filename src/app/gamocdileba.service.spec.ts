import { TestBed } from '@angular/core/testing';

import { GamocdilebaService } from './gamocdileba.service';

describe('GamocdilebaService', () => {
  let service: GamocdilebaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GamocdilebaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
