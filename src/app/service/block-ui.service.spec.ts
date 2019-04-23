import { TestBed, inject } from '@angular/core/testing';

import { BlockUiService } from './block-ui.service';

describe('BlockUiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlockUiService]
    });
  });

  it('should be created', inject([BlockUiService], (service: BlockUiService) => {
    expect(service).toBeTruthy();
  }));
});
