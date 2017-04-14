import { Ng4FullStackPage } from './app.po';

describe('ng4-full-stack App', () => {
  let page: Ng4FullStackPage;

  beforeEach(() => {
    page = new Ng4FullStackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
