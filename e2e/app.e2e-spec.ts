import { Ng2EventsParentChildPage } from './app.po';

describe('ng2-events-parent-child App', () => {
  let page: Ng2EventsParentChildPage;

  beforeEach(() => {
    page = new Ng2EventsParentChildPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
