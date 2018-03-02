import { CommunicatorV2Page } from './app.po';

describe('communicator-v2 App', function() {
  let page: CommunicatorV2Page;

  beforeEach(() => {
    page = new CommunicatorV2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
