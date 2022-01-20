import { TestBed } from '@angular/core/testing';

import { MemberInformationDTOService } from './member-information-dto.service';

describe('MemberInformationDTOService', () => {
  let service: MemberInformationDTOService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemberInformationDTOService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
