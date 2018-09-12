import { TestBed, inject } from '@angular/core/testing';

import { ClientsInfoService } from './clients-info.service';

describe('ClientsInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientsInfoService]
    });
  });

  it('should be created', inject([ClientsInfoService], (service: ClientsInfoService) => {
    expect(service).toBeTruthy();
  }));
});
