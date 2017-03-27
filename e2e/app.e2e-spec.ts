import { WcderPage } from './app.po';

describe('wcder App', () => {
  let page: WcderPage;

  beforeEach(() => {
    page = new WcderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
