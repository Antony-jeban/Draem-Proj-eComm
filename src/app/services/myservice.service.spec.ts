import { TestBed, inject } from '@angular/core/testing';

import { myservice } from './myservice.service';

describe('MyserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [myservice]
    });
  });

  it('should be created', inject([myservice], (service: myservice) => {
    expect(service).toBeTruthy();
  }));
});
