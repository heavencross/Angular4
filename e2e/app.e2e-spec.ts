import { ClarientAppPage } from './app.po';

describe('clarient-app App', () => {
  let page: ClarientAppPage;

  beforeEach(() => {
    page = new ClarientAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
