import { WebDevCA2Page } from './app.po';

describe('web-dev-ca2 App', function() {
  let page: WebDevCA2Page;

  beforeEach(() => {
    page = new WebDevCA2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
