import { ManageGroupModule } from './manage-group.module';

describe('ManageGroupModule', () => {
  let manageGroupModule: ManageGroupModule;

  beforeEach(() => {
    manageGroupModule = new ManageGroupModule();
  });

  it('should create an instance', () => {
    expect(manageGroupModule).toBeTruthy();
  });
});
