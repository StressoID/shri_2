import { ShrisecondPage } from './app.po';

describe('shrisecond App', () => {
  let page: ShrisecondPage;

  beforeEach(() => {
    page = new ShrisecondPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
