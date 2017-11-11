import { TestBed, inject } from '@angular/core/testing';

import { HeaderLayoutService } from './header-layout.service';

describe('HeaderLayoutService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeaderLayoutService]
    });
  });

  it('should be created', inject([HeaderLayoutService], (service: HeaderLayoutService) => {
    expect(service).toBeTruthy();
  }));
});
