import { GuestUserModule } from './guest-user.module';

describe('GuestUserModule', () => {
  let guestUserModule: GuestUserModule;

  beforeEach(() => {
    guestUserModule = new GuestUserModule();
  });

  it('should create an instance', () => {
    expect(guestUserModule).toBeTruthy();
  });
});
